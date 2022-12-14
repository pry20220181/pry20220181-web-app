import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ListPatientComponent } from './component/list-patient/list-patient.component';
import { BodyComponent } from './component/body/body.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalComponent } from './component/list-patient/modal/modal.component';
import { InfoPatientComponent } from './component/info-patient/info-patient.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { LandingComponent } from './component/landing/landing.component';
import { HomePComponent } from './component/home-p/home-p.component';
import { ListVaccinatedViewPComponent } from './component/list-vaccinated-view-p/list-vaccinated-view-p.component';
import { ParentformComponent } from './component/register/parentform/parentform.component';
import { ChildformComponent } from './component/register/childform/childform.component';
import { CampeinVacComponent } from './component/campein-vac/campein-vac.component';
import { ModalCampComponent } from './component/campein-vac/modal-camp/modal-camp.component';
import { CitaParentComponent } from './component/cita-parent/cita-parent.component';
import { DetailVacParentComponent } from './component/detail-vac-parent/detail-vac-parent.component';
import { VaccInventoryComponent } from './component/vacc-inventory/vacc-inventory.component';
import { ModalVaccInvenComponent } from './component/vacc-inventory/modal-vacc-inven/modal-vacc-inven.component';
import { InfoVaccHpComponent } from './component/info-vacc-hp/info-vacc-hp.component';
import { ModalRegisInfVaccComponent } from './component/info-vacc-hp/modal-regis-inf-vacc/modal-regis-inf-vacc.component';
import { VaccInventoryPComponent } from './component/vacc-inventory-p/vacc-inventory-p.component';
import { CampVaccPComponent } from './component/camp-vacc-p/camp-vacc-p.component';
import { ModalCampVaccPComponent } from './component/camp-vacc-p/modal-camp-vacc-p/modal-camp-vacc-p.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    ListPatientComponent,
    BodyComponent,
    ModalComponent,
    InfoPatientComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    HomePComponent,
    ListVaccinatedViewPComponent,
    ParentformComponent,
    ChildformComponent,
    CampeinVacComponent,
    ModalCampComponent,
    CitaParentComponent,
    DetailVacParentComponent,
    VaccInventoryComponent,
    ModalVaccInvenComponent,
    InfoVaccHpComponent,
    ModalRegisInfVaccComponent,
    VaccInventoryPComponent,
    CampVaccPComponent,
    ModalCampVaccPComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InfoPatientComponent,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
