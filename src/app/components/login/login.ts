import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  rolSeleccionado = 'Empleado';

  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(private router: Router) {}

  seleccionarRol(rol: string) {
    this.rolSeleccionado = rol;
  }

  alEnviar() {
    if (this.loginForm.valid) {
      console.log('Rol seleccionado antes de desviar:', this.rolSeleccionado); // Esto te ayudará a ver en la consola si el rol cambia
      
      if (this.rolSeleccionado === 'Empleado') {
        this.router.navigate(['/dashboard-empleado']);
      } else if (this.rolSeleccionado === 'Secretaría') {
        this.router.navigate(['/dashboard-secretaria']);
      } else if (this.rolSeleccionado === 'Gerente') {
        this.router.navigate(['/dashboard-gerente']);
      }
    }
  }
}