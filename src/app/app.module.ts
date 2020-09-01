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
import { BackEndFacadeService } from './facade/back-end-facade.service';
import { AuthFacadeService } from './facade/auth-facade.service';
import { RegisterFacadeService } from './facade/register-facade.service';






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
    CommonModule,
     
  ],


  providers: [BackEndFacadeService,AuthFacadeService,RegisterFacadeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
