import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { LoginComponent } from './components/login/login';
import { DashboardEmpleadoComponent } from './components/dashboard-empleado/dashboard-empleado';
import { DashboardSecretariaComponent } from './components/dashboard-secretaria/dashboard-secretaria';
import { DashboardGerenteComponent } from './components/dashboard-gerente/dashboard-gerente';
// Asegúrate de importar tu componente de registro (ajusta la ruta según tus carpetas)
import { RegistroComponent } from './components/registro/registro'; 

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }, // <-- Aquí registramos la ruta oficial
  { path: 'dashboard-empleado', component: DashboardEmpleadoComponent },
  { path: 'dashboard-secretaria', component: DashboardSecretariaComponent },
  { path: 'dashboard-gerente', component: DashboardGerenteComponent }
];