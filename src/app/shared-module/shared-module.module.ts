import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ButtonsModule, CollapseModule, WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import {NgImageSliderModule} from 'ng-image-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
// import { ValidateEqualModule } from 'ng-validate-equal';

@NgModule({
  declarations: [
  ],
  imports: [
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
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
    // AngularFontAwesomeModule,
    Ng2DropdownModule,
    NgImageSliderModule,
    MatCheckboxModule,
    MatExpansionModule,
    // NgxMaterialTimepickerModule.setLocale('ar-EG')  -> will use it for RTL
    // NgxMaterialTimepickerModule.setLocale('en-US'),
    HttpClientModule,
    // ValidateEqualModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    MatToolbarModule,
    MatMenuModule,
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
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    MatExpansionModule,
    // NgxMaterialTimepickerModule,
  ]

})
export class SharedModuleModule { }
