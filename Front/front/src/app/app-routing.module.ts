import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InfoPatientComponent } from './component/info-patient/info-patient.component';
import { ListPatientComponent } from './component/list-patient/list-patient.component';

const routes: Routes = [
  
  {path:'list',component:ListPatientComponent},
  {path:'info-p',component:InfoPatientComponent},
  {path:'home',component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
