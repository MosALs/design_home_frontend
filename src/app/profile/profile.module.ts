import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { EditSelfProfilePageComponent } from './edit-self-profile-page/edit-self-profile-page.component';
import { ViewBusinessProfilePageComponent } from './view-business-profile-page/view-business-profile-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProfileComponent,
    EditSelfProfilePageComponent,
    ViewBusinessProfilePageComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
