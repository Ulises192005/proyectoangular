import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // <-- Importante tener 'Router' aquí

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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './registro.html'
})
export class RegistroComponent {

  // Inyectamos el enrutador para poder saltar de pantalla
  constructor(private router: Router) {}

  // AQUÍ ESTÁ LA FUNCIÓN QUE TE PEDÍA EL HTML
  alRegistrar() {
    console.log('Formulario enviado, mandando al usuario al login...');
    // Te redirige al login
    this.router.navigate(['/login']); 
  }
}