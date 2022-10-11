import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeinVacComponent } from './component/campein-vac/campein-vac.component';
import { HomePComponent } from './component/home-p/home-p.component';
import { HomeComponent } from './component/home/home.component';
import { InfoPatientComponent } from './component/info-patient/info-patient.component';
import { LandingComponent } from './component/landing/landing.component';
import { ListPatientComponent } from './component/list-patient/list-patient.component';
import { ListVaccinatedViewPComponent } from './component/list-vaccinated-view-p/list-vaccinated-view-p.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CitaParentComponent } from './component/cita-parent/cita-parent.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuardD } from './shared/role.guard';
import { RoleGuardP } from './shared/roleP.guard';
import { DetailVacParentComponent } from './component/detail-vac-parent/detail-vac-parent.component';
import { VaccInventoryComponent } from './component/vacc-inventory/vacc-inventory.component';
import { InfoVaccHpComponent } from './component/info-vacc-hp/info-vacc-hp.component';
import { VaccInventoryPComponent } from './component/vacc-inventory-p/vacc-inventory-p.component';
import { CampVaccPComponent } from './component/camp-vacc-p/camp-vacc-p.component';



const routes: Routes = [
  { path: 'landing', component: LandingComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListPatientComponent, canActivate: [AuthGuard, RoleGuardD], },
  { path: 'info-p', component: InfoPatientComponent, canActivate: [AuthGuard, RoleGuardD] },
  { path: 'homeD', component: HomeComponent, canActivate: [AuthGuard, ] },
  { path: 'homeP', component: HomePComponent, canActivate: [AuthGuard, RoleGuardP] },
  { path: 'list-va-vp', component: ListVaccinatedViewPComponent, canActivate: [AuthGuard, RoleGuardP] },
  { path: 'campein-vac', component: CampeinVacComponent, canActivate: [AuthGuard, RoleGuardD] },
  { path: 'citas-p', component: CitaParentComponent, canActivate: [AuthGuard, RoleGuardP] },
  { path: 'detail-vac-p/:vaccineid', component: DetailVacParentComponent, canActivate: [AuthGuard, RoleGuardP] },
  { path: 'vacc-invent', component: VaccInventoryComponent, canActivate: [AuthGuard, RoleGuardD] },
  { path: 'info-vac', component: InfoVaccHpComponent, canActivate: [AuthGuard, RoleGuardD] },
  { path: 'vacc-inventp', component: VaccInventoryPComponent, canActivate: [AuthGuard, RoleGuardP] },
  { path: 'vacc-camp', component: CampVaccPComponent, canActivate: [AuthGuard, RoleGuardP] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
