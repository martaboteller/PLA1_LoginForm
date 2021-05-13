import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './application/detail/detail.component';
import { ListComponent } from './application/list/list.component';
import { LoginComponent } from './application/login/login.component';

const routes: Routes = [
  //va en cascada
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'list', component: ListComponent },
  //{ path: '**', redirectTo: '/login' }, //Qualquier otra ruta va a login //para loguear usuarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
