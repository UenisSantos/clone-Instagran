import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';
import { HomeComponent } from './acesso/home/home.component';

const routes: Routes = [

  {path:"", component:AcessoComponent},
{path:"home", component:HomeComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {





 }
