import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-empleado',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  template: `
    <div style="padding: 30px; font-family: Roboto, sans-serif;">
      <mat-card style="padding: 20px; max-width: 600px; margin: auto;">
        <h2 style="color: #1976d2;">Panel de Empleado</h2>
        <p>Bienvenido al Sistema de Gestión de Permisos.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <button mat-raised-button color="primary" style="width: 100%;">Solicitar Nuevo Permiso</button>
      </mat-card>
    </div>
  `
})
export class DashboardEmpleadoComponent {}