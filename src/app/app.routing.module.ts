import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingDeshboardComponent } from './views/landing-deshboard/landing-deshboard.component';

export  const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        component: LandingDeshboardComponent,
        pathMatch: 'full',
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
