import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ResumenComponent } from './paginas/resumen/resumen.component';
import { SentimientosyemocionesComponent } from './paginas/sentimientosyemociones/sentimientosyemociones.component';
import { ChatbotComponent } from './paginas/chatbot/chatbot.component';

const routes: Routes = [
  {path: 'principal', component:PrincipalComponent}, 
  {path: 'resumen', component:ResumenComponent},
  {path: 'sentimientosyemociones', component:SentimientosyemocionesComponent},
  {path: 'chatbot', component:ChatbotComponent},
  {path:'',redirectTo:'/principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
