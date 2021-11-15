import { EquipoDetailComponent } from './pages/equipo-detail/equipo-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEquiposComponent } from './pages/add-equipos/add-equipos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'equipos',
    pathMatch: 'full',
    component: EquiposComponent
  },
  {
    path: 'addEquipos',
    pathMatch: 'full',
    component: AddEquiposComponent
  },
  {
    path: 'equipoDetail/:id',
    pathMatch: 'full',
    component: EquipoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
