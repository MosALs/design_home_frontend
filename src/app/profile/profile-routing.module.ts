import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSelfProfilePageComponent } from './edit-self-profile-page/edit-self-profile-page.component';
import { ViewBusinessProfilePageComponent } from './view-business-profile-page/view-business-profile-page.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  {path: 'edit', component: EditSelfProfilePageComponent},
  {path: 'view/:appuser.name', component: ViewBusinessProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
