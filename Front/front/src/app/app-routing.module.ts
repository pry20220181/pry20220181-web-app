import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePComponent } from './component/home-p/home-p.component';
import { HomeComponent } from './component/home/home.component';
import { InfoPatientComponent } from './component/info-patient/info-patient.component';
import { LandingComponent } from './component/landing/landing.component';
import { ListPatientComponent } from './component/list-patient/list-patient.component';
import { ListVaccinatedViewPComponent } from './component/list-vaccinated-view-p/list-vaccinated-view-p.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuardD } from './shared/role.guard';
import { RoleGuardP } from './shared/roleP.guard';

const routes: Routes = [

  { path: 'landing', component: LandingComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListPatientComponent, canActivate: [AuthGuard, RoleGuardD], },
  { path: 'info-p', component: InfoPatientComponent, canActivate: [AuthGuard, RoleGuardD] },
  { path: 'homeD', component: HomeComponent, canActivate: [AuthGuard, RoleGuardD] },
  { path: 'homeP', component: HomePComponent, canActivate: [AuthGuard, RoleGuardP] },
  { path: 'list-va-vp', component: ListVaccinatedViewPComponent, canActivate: [AuthGuard, RoleGuardP] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
