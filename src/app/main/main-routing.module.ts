import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UIPagesUrls } from '../constants/UI_URLs';
import { ProfileComponent } from './profile/profile.component';
import { MainsearchnavbarComponent } from '../mainsearchnavbar/mainsearchnavbar.component';
import { MediaSliderComponent } from '../media-slider/media-slider.component';
import { AccountTypeEntranceComponent } from './account-type-entrance/account-type-entrance.component';


const routes: Routes = [
  {path:UIPagesUrls.HOME_PAGE_URL, component:HomeComponent},
  {path:UIPagesUrls.REGISTERATION_PAGE_URL, component: RegistrationComponent},
  {path:UIPagesUrls.LOGIN_PAGE_URL,component:LoginComponent},
  {path:UIPagesUrls.PROFILE_PAGE_URL,component:ProfileComponent},
  {path:UIPagesUrls.MAINSEARCHNAVBAR_PAGE_URL,component:MainsearchnavbarComponent},
  {path:UIPagesUrls.MEDIASLIDER_PAGE_URL,component:MediaSliderComponent},
  {path: UIPagesUrls.ACCOUNT_TYPE_ENTRANCE_PAGE_URL, component: AccountTypeEntranceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
