import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

// SERVICIOS - Cambiado a ruta relativa que Angular sí entiende por defecto
import { AuthService } from '../../services/auth.service';

// IMPORTS DE ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './registro.html'
})
export class RegistroComponent {

  datosUsuario = {
    nombres: '',
    apellidos: '',
    cedula: '',
    celular: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  alRegistrar() {
    if (this.datosUsuario.contrasena !== this.datosUsuario.confirmarContrasena) {
      alert('Las contraseñas no coinciden. Verifícalas.');
      return;
    }

    console.log('Enviando datos a PostgreSQL...', this.datosUsuario);

    // Agregado (: any) en res y err para romper los errores de TypeScript
    this.authService.registrar(this.datosUsuario).subscribe({
      next: (res: any) => {
        alert('¡Usuario registrado con éxito en la Base de Datos!');
        this.router.navigate(['/login']); 
      },
      error: (err: any) => {
        console.error(err);
        alert(err.error?.mensaje || 'Hubo un error al registrar el usuario.');
      }
    });
  }
}