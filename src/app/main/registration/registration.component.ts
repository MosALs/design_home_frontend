import { Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterationDto } from 'src/app/core/models/dto/Userregisterationdto';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterFacadeService } from 'src/app/facade/register-facade.service';
import { AccountTypes } from 'src/app/core/models/model/AccountTypes';
import { t_register } from 'src/app/core/models/tforms/RegisterationForm';
import { Observable } from 'rxjs';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatRadioChange } from '@angular/material/radio';
import { IClient } from 'src/app/core/models/model/IClient';




@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})


export class RegistrationComponent implements OnInit {

  @Input() firstNameElement;
  @Input() lastNameElement;
  @Input() mobileElement;
  @Input() emailElement;
  @Input() passwordElement;
  @Input() exactLocationElement;
  @Input() regGenderRadio = '';
  @Input() regCountry = '';
  @Input() regGov = '';
  @Input() regArea = '';
  @Input() regAccountType = '';


  public regFirstName: string = '';
  public regLastName: string = '';
  public regMobile: string = '';
  public regEmail: string = '';
  public regPassword: string = '';
  public regExactLocation: string = '';


  @ViewChild(MatAccordion) accordion: MatAccordion;
  accordionCurrentStep = 0;

  setStep(index: number) {
    this.accordionCurrentStep = index;
  }

  nextStep() {
    this.accordionCurrentStep++;
  }

  prevStep() {
    this.accordionCurrentStep--;
  }


  optionSelectionChanges: Observable<MatOptionSelectionChange>

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

  title = 'test-app';
  countryList: Country[] = this.ALL_Countries;
  govenoratesList: Governorate[] = this.ALL_Governerates;
  areasList: Area[] = this.ALL_Areas;
  suitableGovernorateList: Governorate[] = [];
  suitableAreaList: Area[] = [];

  specialization = ['نجار', 'سباك', 'كهربائى'];
  userGenderapp = ['Male', 'Female'];

  accountType: AccountTypes = new AccountTypes();


  TotalRow: number;

  private _userRegisterationDto: UserRegisterationDto = new UserRegisterationDto();
  registerForm: FormGroup;
  locationFormGroup: FormGroup;
  public registerInValid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  locationFormGroup1: FormGroup;
  // _toastr: any;
  shopAndCompanyForm: FormGroup;


  // isNotClient: boolean = false;


  private activateRegisterBtn: boolean = false;
  private SpecificDays: boolean = false;
  private everyDay: boolean = false;
  private SpecificDaysString: string;
  private daysOfTheWeek: string[] = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  private working24hrs: boolean = false;
  private workingDayTime: boolean = false;
  private workingNightTime: boolean = false;
  private wholesale: boolean = false;
  private retail: boolean = false;
  private bothWholesaleAndRetail: boolean = false;
  private deliveryServiceIsAllowed: boolean = false;
  private deliveryServiceNotAllowed: boolean = false;
  private lookingForServiceButton: boolean = false;
  private handworkerButton: boolean = false;
  private TradeButton: boolean = false;


  // public currentUser: IClient ={
  //   id: '',
  //   first_name: this.regFirstName,
  //   last_name: this.regLastName,
  //   mobile: this.regMobile,
  //   gender: this.regGenderRadio,
  //   email: this.regEmail,
  //   password: this.regPassword,
  //   country: this.regCountry,
  //   gov: this.regGov,
  //   area: this.regArea,
  //   exact_loaction: this.regExactLocation,
  //   account_type: this.regAccountType,
  //   avatar: '',
  // }




  constructor(
    private formBuilder: FormBuilder,
    private _fb: FormBuilder,
    private router: Router,
    private _registerFacadeService: RegisterFacadeService,

    private register: t_register,
    private renderer2: Renderer2
  ) {
    this.accountType.client = true;

    this.accountType.company = false;
    this.accountType.handworker = false;
    this.accountType.shop = false;
  }
  //  dynamicArray: Array<AccountType> = [];
  //  newDynamic: any = {};

  //  ngOnInit() {
  // this.newDynamic = {title1: "", title2: "",title3:""};
  //   this.dynamicArray.push(this.newDynamic);
  //العلاقه لو مش عامل لوجن يروح يعمل لوجن الاول 
  // this.returnUrl = UIPagesUrls.LOGIN_PAGE_URL;

  // this.registerForm = new FormGroup({
  //   username: new FormControl('', [Validators.email,Validators.required]),
  //   password: new FormControl('', [Validators.required,Validators.maxLength(8)]),
  //   mobile: new FormControl('',[Validators.required,Validators.minLength(11)]),
  //   firstName: new FormControl('', [Validators.required]),
  //   lastName: new FormControl('', [Validators.required]),
  //   userGenderapp: new FormControl('', [Validators.required]),
  //   locationName:new FormControl('',Validators.required),
  //   userHours:new FormControl('',Validators.required),
  //   deliveryNoDelivery:new FormControl('',Validators.required),
  //   tradeMobileNumber:new FormControl(''),
  //   Name: new FormControl('',Validators.required),
  // RollNo:new FormControl('',Validators.required),
  // Class:new FormControl('',Validators.required),
  // MobileNo:new FormControl('',Validators.required),
  // itemRows: this._fb.array( [this.initItemRow()]),
  // });
  //   this.registerForm = this.fb.group({
  //    username: ['', Validators.email,Validators.required],
  //    password: ['', Validators.required,Validators.minLength(8)],
  //    mobile:['',Validators.required,Validators.minLength(11)],
  //    name:['',Validators.required]

  //  });


  ngOnInit() {
    console.log("no on init");
    // console.log("isNotClient1", this.isNotClient);


    this.registerForm = this.register.createRegisterForm();

    // this.locationFormGroup1 = this._fb.group({
    //   Name: [''],
    //   RollNo: [''],
    //   Class: [''],
    //   MobileNo: ['']
    // }),
    //   // this.newDynamic = {title1: "", title2: "",title3:""};
    //   //   this.dynamicArray.push(this.newDynamic);

    //   //العلاقه لو مش عامل لوجن يروح يعمل لوجن الاول 
    //   // this.returnUrl = UIPagesUrls.LOGIN_PAGE_URL;

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(11)]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userGenderapp: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      governorate: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      locationName: new FormControl('', Validators.required),
      userHours: new FormControl('', Validators.required),
      deliveryNoDelivery: new FormControl('', Validators.required),
      tradeMobileNumber: new FormControl(''),
      Name: new FormControl('', Validators.required),
      RollNo: new FormControl('', Validators.required),
      Class: new FormControl('', Validators.required),
      MobileNo: new FormControl('', Validators.required),
      locationFormGroup: this._fb.array([
        this.locationFormGroup1
      ])
    });





    // console.log(this.registerForm);
    // console.log(this.locationFormGroup);
    //   this.registerForm = this.fb.group({
    //    username: ['', Validators.email,Validators.required],
    //    password: ['', Validators.required,Validators.minLength(8)],
    //    mobile:['',Validators.required,Validators.minLength(11)],
    //    name:['',Validators.required]

    //  });

  }




  // async onSubmit(Object) {

  //   console.log(Object);
  //   this.registerInValid = false;
  //   this.formSubmitAttempt = false;

  //   // if (this.registerForm.valid) {
  //   try {
  //     //   this._userRegisterationDto.appuser.name = this.registerForm.get('name').value;
  //     //   this._userRegisterationDto.appuser.userName = this.registerForm.get('username').value;
  //     //   this._userRegisterationDto.appuser.password = this.registerForm.get('password').value;
  //     //   this._userRegisterationDto.appuser.userMobile = this.registerForm.get('mobile').value;
  //     //  // this._userRegisterationDto.appuser.active = this.registerForm.get('active').value;
  //     //   this._userRegisterationDto.areas.areaName=this.registerForm.get('areaName').value;
  //     //   this._userRegisterationDto.location.locationName=this.registerForm.get('locationName').value;
  //     //   this._userRegisterationDto.accountType.accountTypeName=this.registerForm.get('accountTypeName').value;
  //     //   this._userRegisterationDto.specialization.specializationName=this.registerForm.get('specializationName').value;
  //     this._registerFacadeService.register(this._userRegisterationDto, this.accountType).subscribe(
  //       data => {
  //         console.log("result after subscribe:", data);
  //         // redirect to home page and get token 
  //         // 1- save token in local storage.
  //         // 2- redirect to home page.
  //       }
  //     )




  //     //     console.log('LoginComponent == onSubmit() ==  if (this.formA.valid) == try');
  //     //    // await this._registerFacadeService.register(this._userRegisterationDto).subscribe((Date.toString){

  //     //       await this._registerFacadeService.register(this._userRegisterationDto,this.accountType).subscribe(
  //     //       (token: string) => {
  //     //         console.log('LoginComponent == onSubmit() == token: ', token);
  //     //       }
  //     //     );
  //   } catch (err) {
  //     err: HttpErrorResponse;
  //     // log()
  //     this.registerInValid = true;

  //   }
  //   // } else {
  //   //   this.formSubmitAttempt = true;
  //   // }
  // }

  //   addRow(index) {  
  //     this.newDynamic = {title1: "", title2: "",title3:"",title4:"",title5:""};
  //     this.dynamicArray.push(this.newDynamic);
  //     this._toastr.success('New row added successfully', 'New Row');
  //     console.log(this.dynamicArray);
  //     return true;
  // }

  // deleteRow(index) {
  //     if(this.dynamicArray.length ==1) {
  //       this._toastr.error("Can't delete the row when there is only one row", 'Warning');
  //         return false;
  //     } else {
  //         this.dynamicArray.splice(index, 1);
  //         this._toastr.warning('Row deleted successfully', 'Delete row');
  //         return true;
  //     }
  // }



  // الشكل الجديد




  initItemRow() {

    return this._fb.group({
      Name: [''],
      RollNo: [''],
      Class: [''],
      MobileNo: ['']
    })

  }

  addNewRow() {
    const control = <FormArray>this.locationFormGroup.controls['itemRows'];
    control.push(this.registerForm)
  }

  deleteRow(index: number) {
    const control = <FormArray>this.locationFormGroup.controls['itemRows'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }

    if (this.TotalRow > 1) {
      control.removeAt(index);
    }
    else {
      alert("one record is mandatory");
      return false;
    }

  }

  btnSpecificDays() {
    this.SpecificDays = true;
    this.everyDay = false;
  }
  btnEveryDay() {
    this.SpecificDays = false;
    this.everyDay = true;
  }
  btnWorking24hrs() {
    this.working24hrs = true;
    this.workingDayTime = false;
    this.workingNightTime = false;
  }
  btnWorkingDayTime() {
    this.working24hrs = false;
    this.workingDayTime = true;
    this.workingNightTime = false;
  }
  btnWorkingNightTime() {
    this.working24hrs = false;
    this.workingDayTime = false;
    this.workingNightTime = true;
  }

  btnWholesale() {
    this.wholesale = true;
    this.retail = false;
    this.bothWholesaleAndRetail = false;
  }
  btnRetail() {
    this.wholesale = false;
    this.retail = true;
    this.bothWholesaleAndRetail = false;
  }
  btnWholesaleAndRetail() {
    this.wholesale = false;
    this.retail = false;
    this.bothWholesaleAndRetail = true;
  }

  btnDeliveryServiceIsAllowed() {
    this.deliveryServiceIsAllowed = true;
    this.deliveryServiceNotAllowed = false;
  }
  btnDeliveryServiceNotAllowed() {
    this.deliveryServiceIsAllowed = false;
    this.deliveryServiceNotAllowed = true;
  }

  changeSelectedCountry(event: MatOptionSelectionChange, country: Country) {
    if (event.isUserInput) {
      // console.log("govenorateId:", govenorate.gid);
      this.suitableGovernorateList = this.govenoratesList.filter(g => g.cid == country.cid);
      this.regCountry = event.source.value;
      console.log("regCountry", this.regCountry);
    }

  }
  changeSelectedGovernorate(event: MatOptionSelectionChange, governorate: Governorate) {
    if (event.isUserInput) {
      // console.log("governorateId:", governorate.bid);
      this.suitableAreaList = this.areasList.filter(a => a.gid == governorate.gid);
      this.regGov = event.source.value;
      console.log("regGov", this.regGov);
    }
  }

  changeSelectedArea(event: MatOptionSelectionChange) {
    this.regArea = event.source.value;
    console.log("regArea", this.regArea);
  }

  shopSubform(shop) {
    shop = this.accountType.shop;
    if (this.accountType.shop) {
      this.shopAndCompanyForm = this.register.createRegisterForm();

    }
  }

  addTradeMobile(i) {
    // this.mobileIndex[i]++;
    // for(let i=0; i<this.mobileIndex.length; i++){
    // this.mobileIndex.push(i);
    // }
  }
  removeTradeMobile(i) {
    // this.mobileIndex[i]--;
  }


  lookingForServiceRadioButton() {
    this.lookingForServiceButton = true;
    this.handworkerButton = false;
    this.TradeButton = false;
    this.accountType.client = !this.accountType.client;
    this.accountType.handworker = false;
    this.accountType.shop = false;
    this.accountType.company = false;
    this.activateRegisterBtn = true;
  }
  handworkerRadioButton() {
    this.lookingForServiceButton = false;
    this.handworkerButton = true;
    this.TradeButton = false;
    this.accountType.client = false;
    this.accountType.handworker = true;
    this.accountType.shop = false;
    this.accountType.company = false;
    this.activateRegisterBtn = true;
  }
  TradeRadioButton() {
    this.lookingForServiceButton = false;
    this.handworkerButton = false;
    this.TradeButton = true;
    this.accountType.client = false;
    this.accountType.handworker = false;
    this.accountType.shop = true;
    this.accountType.company = true;
    this.activateRegisterBtn = true;
  }


  onFirstNameChange($event) {
    this.regFirstName = $event.target.value;
    console.log("regFirstName", this.regFirstName)
  }
  onLastNameChange($event) {
    this.regLastName = $event.target.value;
    console.log("regLastName", this.regLastName)
  }
  onMobileChange($event) {
    this.regMobile = $event.target.value;
    console.log("regMobile", this.regMobile)
  }
  onEmailChange($event) {
    this.regEmail = $event.target.value;
    console.log("regEmail", this.regEmail)
  }
  onPasswordChange($event) {
    this.regPassword = $event.target.value;
    console.log("regPassword", this.regPassword)
  }
  onExactLocationChange($event) {
    this.regExactLocation = $event.target.value;
    console.log("regExactLocation", this.regExactLocation)
  }
  genderRadioChange(event: MatRadioChange) {
    this.regGenderRadio = event.value;
    console.log("regGenderRadio", this.regGenderRadio)
  }
  accountTypeRadioChange(event: MatRadioChange) {
    this.regAccountType = event.value;
    console.log("regAccountType", this.regAccountType)
  }


  // public submitRegistrationForm(){
  //   console.log(this.currentUser);
  // }

  iclient: IClient;

  public submitRegistrationForm() {
    console.log("submitRegistrationForm ======= ");
    console.log("form value : ", this.registerForm.value);
    //  this.iclient.first_name = this.registerForm.controls.firstName.value

    // this._registerFacadeService.newRegister(this.registerForm.value as IClient);
    
    
  }

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



