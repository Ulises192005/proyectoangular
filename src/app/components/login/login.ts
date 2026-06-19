import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // <-- Importamos ReactiveFormsModule

// SERVICIOS
import { AuthService } from '../../services/auth.service';

// MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule, // <-- Agregamos aquí para que reconozca [formGroup]
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.html'
})
export class LoginComponent {
  
  loginForm: FormGroup;
  rolSeleccionado: string = 'Empleado'; 

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    // Inicializamos el formulario con las validaciones que tu HTML espera
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    });
  }

  seleccionarRol(rol: string) {
    this.rolSeleccionado = rol;
    console.log('Rol seleccionado:', this.rolSeleccionado);
  }

  // Cambiado al nombre exacto que tiene tu botón en el HTML: (ngSubmit)="alEnviar()"
  alEnviar() {
    if (this.loginForm.invalid) return;

    const datosLogin = {
      correo: this.loginForm.value.correo,
      contrasena: this.loginForm.value.contrasena,
      rol: this.rolSeleccionado
    };

    console.log('Intentando conectar login con Postgres...', datosLogin);

    this.authService.login(datosLogin).subscribe({
      next: (res: any) => {
        alert(`¡Bienvenido! Ingreso exitoso como ${res.usuario.rol}`);
        
        // Redirección basada en el rol de la Base de Datos
        if (res.usuario.rol === 'Empleado') {
          this.router.navigate(['/dashboard-empleado']);
        } else if (res.usuario.rol === 'Secretaría') {
          this.router.navigate(['/dashboard-secretaria']);
        } else if (res.usuario.rol === 'Gerente') {
          this.router.navigate(['/dashboard-gerente']);
        }
      },
      error: (err: any) => {
        console.error(err);
        alert(err.error?.mensaje || 'Error al iniciar sesión.');
      }
    });
  }
}