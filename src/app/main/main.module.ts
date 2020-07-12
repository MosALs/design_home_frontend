import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],

  imports: [
    CommonModule,
    MainRoutingModule
  ],

  exports:[
    
  ]

})
export class MainModule { }
