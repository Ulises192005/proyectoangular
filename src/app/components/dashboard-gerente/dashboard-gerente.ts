import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard-gerente',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div style="padding: 30px; font-family: Roboto, sans-serif;">
      <mat-card style="padding: 20px; max-width: 600px; margin: auto; border-top: 4px solid #d32f2f;">
        <h2 style="color: #d32f2f;">Portal de Aprobación - Gerencia</h2>
        <p>Acceso exclusivo para firmas electrónicas y autorizaciones de permisos del personal.</p>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button mat-raised-button color="warn" style="flex: 1;">Rechazar</button>
          <button mat-raised-button color="primary" style="flex: 1;">Aprobar Permiso</button>
        </div>
      </mat-card>
    </div>
  `
})
export class DashboardGerenteComponent {}