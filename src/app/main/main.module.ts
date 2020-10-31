import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AuthenticationService } from '../core/services/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { MainsearchnavbarComponent } from '../mainsearchnavbar/mainsearchnavbar.component';
import { MediaSliderComponent } from '../media-slider/media-slider.component';


@NgModule({
  declarations: [HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    MainsearchnavbarComponent,
    MediaSliderComponent
    
  ],

  imports: [
    MainRoutingModule,
    SharedModuleModule
  ],

  exports:[
   
  ],
  providers:[ AuthenticationService]

})
export class MainModule { }
