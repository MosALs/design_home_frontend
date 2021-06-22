import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UIPagesUrls } from '../constants/UI_URLs';
import { ProfileComponent } from './profile/profile.component';
import { MainsearchnavbarComponent } from '../mainsearchnavbar/mainsearchnavbar.component';
import { MediaSliderComponent } from '../media-slider/media-slider.component';
import { SpecializationsSmallBoxesSliderComponent } from './specializations-small-boxes-slider/specializations-small-boxes-slider.component';
import { UserDetailsComponent } from './profile/acountTypes-profile/accountTypes-divS/user-details/user-details.component';


const routes: Routes = [
  {path:UIPagesUrls.HOME_PAGE_URL, component:HomeComponent},
  {path:UIPagesUrls.REGISTERATION_PAGE_URL, component: RegistrationComponent},
  {path:UIPagesUrls.LOGIN_PAGE_URL,component:LoginComponent},
  // {path:UIPagesUrls.PROFILE_PAGE_URL,component:ProfileComponent},
  {path:UIPagesUrls.PROFILE_FORM_PAGE_URL,component:ProfileComponent},
  {path:UIPagesUrls.MAINSEARCHNAVBAR_PAGE_URL,component:MainsearchnavbarComponent},
  {path:UIPagesUrls.MEDIASLIDER_PAGE_URL,component:MediaSliderComponent},
  {path:UIPagesUrls.USERDETAILS_PAGE_URL,component:UserDetailsComponent},

  //test//
  {path: UIPagesUrls.specializations_small_boxes_slider, component:SpecializationsSmallBoxesSliderComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

  
 }
