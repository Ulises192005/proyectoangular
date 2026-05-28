import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<h2>Pantalla de Dashboard (Próximamente)</h2>`,
  styles: []
})
export class DashboardComponent {}