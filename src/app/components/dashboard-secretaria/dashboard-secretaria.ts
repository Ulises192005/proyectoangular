import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-secretaria',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div style="padding: 30px; font-family: Roboto, sans-serif;">
      <mat-card style="padding: 20px; max-width: 800px; margin: auto; background-color: #f0f4f8;">
        <h2 style="color: #4a5568;">Bandeja de Secretaría</h2>
        <p>Aquí constan las solicitudes pendientes por validar la documentación adjunta.</p>
        <div style="background: white; padding: 15px; border-radius: 8px; border-left: 5px solid #ffa000;">
          <strong>Trámite #1024</strong> - Pendiente revisión de certificado médico.
        </div>
      </mat-card>
    </div>
  `
})
export class DashboardSecretariaComponent {}