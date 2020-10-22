import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UIPagesUrls } from '../constants/UI_URLs';
import { ProfileComponent } from './profile/profile.component';
import { MainsearchnavbarComponent } from '../mainsearchnavbar/mainsearchnavbar.component';


const routes: Routes = [
  {path:UIPagesUrls.HOME_PAGE_URL, component:HomeComponent},
  {path:UIPagesUrls.REGISTERATION_PAGE_URL, component: RegistrationComponent},
  {path:UIPagesUrls.LOGIN_PAGE_URL,component:LoginComponent},
  {path:UIPagesUrls.PROFILE_PAGE_URL,component:ProfileComponent},
  {path:UIPagesUrls.MAINSEARCHNAVBAR_PAGE_URL,component:MainsearchnavbarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
