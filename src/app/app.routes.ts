import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { LoginComponent } from './components/login/login';
import { DashboardEmpleadoComponent } from './components/dashboard-empleado/dashboard-empleado';
import { DashboardSecretariaComponent } from './components/dashboard-secretaria/dashboard-secretaria';
import { DashboardGerenteComponent } from './components/dashboard-gerente/dashboard-gerente';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard-empleado', component: DashboardEmpleadoComponent },
  { path: 'dashboard-secretaria', component: DashboardSecretariaComponent },
  { path: 'dashboard-gerente', component: DashboardGerenteComponent }
  // NOTA: Quitamos el '**' temporalmente para romper el bucle y ver el error real
];