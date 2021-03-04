import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, SelectControlValueAccessor, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class RegComponent implements OnInit {

  model = new IForm (
    8,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '');
  submitted = false;


// COUNTRY , GOV, AREA LISTS
  private ALL_Countries: Country[] = [
    { cid: 11, name: 'Egypt' },
    { cid: 12, name: 'Saudi Arabia' },
    { cid: 13, name: 'Jordan' },
    { cid: 14, name: 'Lebanon' }
  ];
  private ALL_Governerates: Governorate[] = [
    { gid: 101, name: 'Cairo', cid: 11 },
    { gid: 102, name: 'Giza', cid: 11 },
    { gid: 103, name: 'Alexandria', cid: 11 },
    { gid: 104, name: 'Fayoum', cid: 11 },
    { gid: 105, name: 'Damietta', cid: 11 },
    { gid: 106, name: 'Riyadh', cid: 12 },
    { gid: 107, name: 'Jaddah', cid: 12 },
    { gid: 108, name: 'Dammam', cid: 12 },
    { gid: 109, name: 'Makkah', cid: 12 },
    { gid: 110, name: 'Medina', cid: 12 },
    { gid: 111, name: 'Cairo', cid: 13 },
    { gid: 112, name: 'Zarqa', cid: 13 },
    { gid: 113, name: 'Beirut', cid: 13 },
    { gid: 114, name: 'Metn', cid: 13 },
    { gid: 115, name: 'North', cid: 13 },
    { gid: 116, name: 'South', cid: 13 },
    { gid: 117, name: 'Keserwan', cid: 13 },
  ];

  private ALL_Areas: Area[] = [
    { aid: 80, name: 'Maadi', gid: 101 },
    { aid: 81, name: 'Nasr City', gid: 101 },
    { aid: 82, name: 'Shoubra', gid: 101 },
    { aid: 83, name: 'New Cairo', gid: 101 },
    { aid: 84, name: 'West el-Balad', gid: 101 },
    { aid: 85, name: 'Dokki', gid: 102 },
    { aid: 86, name: 'Mohandeseen', gid: 102 },
    { aid: 87, name: 'Haram', gid: 102 },
    { aid: 88, name: 'Faisal', gid: 102 },
    { aid: 89, name: 'Agouza', gid: 102 },
    { aid: 90, name: 'Roshdy', gid: 103 },
    { aid: 91, name: 'Smouha', gid: 103 },
    { aid: 92, name: 'Louran', gid: 103 },
    { aid: 93, name: 'Bahary', gid: 103 },
    { aid: 94, name: 'Cleopatra', gid: 103 },
    { aid: 95, name: 'Ibsheway', gid: 104 },
    { aid: 96, name: 'el-Fayoum City', gid: 104 },
    { aid: 97, name: 'Damietta Elgedida', gid: 105 },
    { aid: 98, name: 'Damietta City', gid: 105 },

  ];
  countryList: Country[] = this.ALL_Countries;
  govenoratesList: Governorate[] = this.ALL_Governerates;
  areasList: Area[] = this.ALL_Areas;
  suitableGovernorateList: Governorate[] = [];
  suitableAreaList: Area[] = [];

  constructor() { }

  ngOnInit() {


    // onSubmit(){
    //   this.submitted = true;
    // }

  }

  // patternValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } => {
  //     if (!control.value) {
  //       return null;
  //     }
  //     const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
  //     const valid = regex.test(control.value);
  //     return valid ? null : { invalidPassword: true };
  //   };
  // }

  // MatchPassword(password: string, confirmPassword: string) {
  //   return (formGroup: FormGroup) => {
  //     const passwordControl = formGroup.controls[password];
  //     const confirmPasswordControl = formGroup.controls[confirmPassword];

  //     if (!passwordControl || !confirmPasswordControl) {
  //       return null;
  //     }

  //     if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
  //       return null;
  //     }

  //     if (passwordControl.value !== confirmPasswordControl.value) {
  //       confirmPasswordControl.setErrors({ passwordMismatch: true });
  //     } else {
  //       confirmPasswordControl.setErrors(null);
  //     }
  //   }
  // }


  changeSelectedCountry(event, country: Country) {
    if (event) {
      // this.suitableGovernorateList = this.govenoratesList.filter(g => g.cid == country.cid);
      console.log("hello");
    }
  }

  // changeSelectedGovernorate(event: SelectControlValueAccessor, governorate: Governorate) {
  //   if (event.isUserInput) {
  //     // console.log("governorateId:", governorate.bid);
  //     this.suitableAreaList = this.areasList.filter(a => a.gid == governorate.gid);
  //     this.regGov = event.source.value;
  //     console.log("regGov", this.regGov);
  //   }
  // }

  // changeSelectedArea(event: SelectControlValueAccessor) {
  //   this.regArea = event.source.value;
  //   console.log("regArea", this.regArea);
  // }

}

export class IForm{
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
    public firstName: string,
    public lastName: string,
    public mobile: string,
    public gender: string,
    public country: string,
    public gov: string,
    public area: string,
    public accountType: string,
    public address?: string,
    public userAvatar?: string,
    public trade?: ITrade,
  ){}
}

export class ITrade{
  constructor(
    public tradeName: string,
    public tradeMobileNumber: string,
    public gov: string,
    public area: string,
    public specialization: string,
    public userHours: string,
    public wholeRetailSale: string,
    public deliveryNoDelivery:string,
    public websiteLink?: string,
    public facbookLink?: string
  ){}
}
export interface Country {
  cid: number;
  name: string;
}

export interface Governorate {
  gid: number;
  name: string;
  cid: number;
}

export interface Area {
  aid: number;
  name: string;
  gid: number;
}
