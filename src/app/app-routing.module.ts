import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
