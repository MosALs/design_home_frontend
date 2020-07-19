import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BackEndFacadService } from './facad/back-end-facad.service';
import { AuthFacadService } from './facad/auth-facad.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    MainModule,
    SharedModuleModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  
  ],


  providers: [BackEndFacadService,AuthFacadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
