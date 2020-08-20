import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatTableModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatCardModule, MatSlideToggleModule, MatSelectModule, MatLabel, MatFormFieldModule, MatOptionModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
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
  MatOptionModule


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
 