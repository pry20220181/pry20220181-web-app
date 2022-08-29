import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ListPatientComponent } from './component/list-patient/list-patient.component';
import { BodyComponent } from './component/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './component/list-patient/modal/modal.component';
import { InfoPatientComponent } from './component/info-patient/info-patient.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    ListPatientComponent,
    BodyComponent,
    ModalComponent,
    InfoPatientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
