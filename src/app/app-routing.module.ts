import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DetailComponent } from './detail/detail.component'

const routes: Routes = [
  // La route qui s'affiche à la racine 
  { path : '', redirectTo: 'produit', pathMatch: 'full'},

  //pour etre rediriger vers product au lieu du port par défaut
  {path: 'produit', component: ProduitComponent}, 

  //route vers detail produit
  {path: 'produit/detail-produit/:id', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
