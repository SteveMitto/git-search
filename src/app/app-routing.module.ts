import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitComponent } from './git/git.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'**' ,component:NotFoundComponent},
  {path:'' , component:GitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
