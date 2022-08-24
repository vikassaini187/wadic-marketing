import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LandingDeshboardComponent } from './views/landing-deshboard/landing-deshboard.component';
import { BannerSecComponent } from './views/landing-deshboard/banner-sec/banner-sec.component';
import { CounterSecComponent } from './views/landing-deshboard/counter-sec/counter-sec.component';
import { SubscribeFormComponent } from './views/landing-deshboard/subscribe-form/subscribe-form.component';
import { ServiceSecComponent } from './views/landing-deshboard/service-sec/service-sec.component';
import { CeoSectionComponent } from './views/landing-deshboard/ceo-section/ceo-section.component';
import { ScheduleMettingComponent } from './views/landing-deshboard/schedule-metting/schedule-metting.component';
import {ContainerComponent } from './views/landing-deshboard/container/container.component';
import { FooterComponent } from './views/landing-deshboard/footer/footer.component';
import { WorflowSectionComponent } from './views/landing-deshboard/worflow-section/worflow-section.component';
import{HttpClientModule}from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
   LandingDeshboardComponent,
   BannerSecComponent,
   CounterSecComponent,
   SubscribeFormComponent,
   ServiceSecComponent,
   CeoSectionComponent,
   ScheduleMettingComponent,
   ContainerComponent,
   FooterComponent,
   WorflowSectionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
