const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sgpd',       // Verifica que sea el nombre de tu BD
  password: '1234', // Pon tu contraseña aquí
  port: 5432,
});

// Probar conexión
pool.connect((err, client, release) => {
  if (err) return console.error('Error en BD:', err.stack);
  console.log('🚀 ¡Conexión exitosa a PostgreSQL realizada!');
  release();
});

// ==========================================
// RUTA 1: REGISTRO DE EMPLEADOS
// ==========================================
app.post('/api/registro', async (req, res) => {
  const { nombres, apellidos, cedula, celular, correo, contrasena } = req.body;

  try {
    // Insertamos forzando el rol a 'Empleado' por seguridad
    const query = `
      INSERT INTO usuarios (nombres, apellidos, cedula, celular, correo, contrasena, rol)
      VALUES ($1, $2, $3, $4, $5, $6, 'Empleado') RETURNING id, correo, rol;
    `;
    const values = [nombres, apellidos, cedula, celular, correo, contrasena];
    
    const result = await pool.query(query, values);
    
    res.status(201).json({
      ok: true,
      mensaje: 'Empleado registrado con éxito',
      usuario: result.rows[0]
    });

  } catch (error) {
    console.error(error);
    if (error.code === '23505') { // Código de Postgres para clave duplicada (cédula o correo)
      return res.status(400).json({ ok: false, mensaje: 'La cédula o el correo ya están registrados.' });
    }
    res.status(500).json({ ok: false, mensaje: 'Error interno del servidor al registrar.' });
  }
});

// ==========================================
// RUTA 2: LOGIN CON FILTRO DE ROLES
// ==========================================
app.post('/api/login', async (req, res) => {
  const { correo, contrasena, rol } = req.body; // Recibimos el rol que el usuario seleccionó en los botones

  try {
    // Buscamos al usuario por correo
    const query = 'SELECT * FROM usuarios WHERE correo = $1';
    const result = await pool.query(query, [correo]);

    if (result.rows.length === 0) {
      return res.status(404).json({ ok: false, mensaje: 'Usuario no encontrado.' });
    }

    const usuario = result.rows[0];

    // Validación simple de contraseña (texto plano por ahora para tus pruebas)
    if (usuario.contrasena !== contrasena) {
      return res.status(401).json({ ok: false, mensaje: 'Contraseña incorrecta.' });
    }

    // 🔥 VALIDACIÓN CRUCIAL DE ROL SEGURA:
    // Comparamos el rol de la Base de Datos con el botón que presionó en Angular
    if (usuario.rol !== rol) {
      return res.status(403).json({ 
        ok: false, 
        mensaje: `Acceso denegado. Tu cuenta no tiene asignado el rol de ${rol}.` 
      });
    }

    // Si todo coincide, pasa limpio
    res.status(200).json({
      ok: true,
      mensaje: 'Ingreso exitoso',
      usuario: {
        id: usuario.id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        correo: usuario.correo,
        rol: usuario.rol
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, mensaje: 'Error interno del servidor en el login.' });
  }
});

app.listen(PORT, () => {
  console.log(`📡 Servidor API escuchando en http://localhost:${PORT}`);
});