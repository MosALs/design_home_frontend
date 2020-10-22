import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSidenavModule,MatListModule,MatIconModule, MatToolbarModule, MatTableModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatCardModule, MatSlideToggleModule, MatSelectModule, MatLabel, MatFormFieldModule, MatOptionModule, MatMenuModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ButtonsModule, CollapseModule, WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    RouterModule,
    FormsModule,
     CustomFormsModule,
     MatToolbarModule,
     MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSidenavModule,
  MatListModule,
  ToastrModule.forRoot(),
  ButtonsModule,
  WavesModule,
  CollapseModule,
  MDBBootstrapModule.forRoot(),


  ],
  exports :[
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
     CustomFormsModule,
     MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatLabel,
  MatFormFieldModule,
  MatOptionModule,
  HttpClientModule
  ]

})
export class SharedModuleModule { }
 