import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterationDto } from 'src/app/core/models/dto/Userregisterationdto';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterFacadeService } from 'src/app/facade/register-facade.service';
import { AccountTypes } from 'src/app/core/models/model/AccountTypes';
import { t_register } from 'src/app/core/models/tforms/RegisterationForm';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  foods= ['Steak','Pizza','Tacos' ];
  areas= ['haram','tanta','alx' ];
  specialization= ['نجار','سباك','كهربائى' ];
  userGenderapp= ['Male','Female' ];
  
  accountType:AccountTypes= new AccountTypes();

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




  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _registerFacadeService: RegisterFacadeService,

    private register:t_register
  ) {

    this.accountType.client = false;
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
    
    
    this.registerForm = this.register.createRegisterForm();

    console.log("registerationForm: ",this.registerForm);
    
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

    //   this.registerForm = new FormGroup({
    //     username: new FormControl('', [Validators.email, Validators.required]),
    //     password: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    //     mobile: new FormControl('', [Validators.required, Validators.minLength(11)]),
    //     name: new FormControl('', [Validators.required]),
    //     userGenderapp: new FormControl('', [Validators.required]),
    //     locationName: new FormControl('', Validators.required),
    //     userHours: new FormControl('', Validators.required),
    //     deliveryNoDelivery: new FormControl('', Validators.required),
    //     tradeMobileNumber: new FormControl(''),
    //     Name: new FormControl('', Validators.required),
    //     RollNo: new FormControl('', Validators.required),
    //     Class: new FormControl('', Validators.required),
    //     MobileNo: new FormControl('', Validators.required),
    //     locationFormGroup: this._fb.array([
    //       this.locationFormGroup1
    //     ])







    //   });

    // console.log(this.registerForm);
    // console.log(this.locationFormGroup);
    //   this.registerForm = this.fb.group({
    //    username: ['', Validators.email,Validators.required],
    //    password: ['', Validators.required,Validators.minLength(8)],
    //    mobile:['',Validators.required,Validators.minLength(11)],
    //    name:['',Validators.required]

    //  });

>>>>>>> 6887f1b27e2ead0e275f61239b1311e8fcb32ae4
  }




  async onSubmit(Object) {

    console.log(Object);
    this.registerInValid = false;
    this.formSubmitAttempt = false;
    
    // if (this.registerForm.valid) {
    try {
      //   this._userRegisterationDto.appuser.name = this.registerForm.get('name').value;
      //   this._userRegisterationDto.appuser.userName = this.registerForm.get('username').value;
      //   this._userRegisterationDto.appuser.password = this.registerForm.get('password').value;
      //   this._userRegisterationDto.appuser.userMobile = this.registerForm.get('mobile').value;
      //  // this._userRegisterationDto.appuser.active = this.registerForm.get('active').value;
      //   this._userRegisterationDto.areas.areaName=this.registerForm.get('areaName').value;
      //   this._userRegisterationDto.location.locationName=this.registerForm.get('locationName').value;
      //   this._userRegisterationDto.accountType.accountTypeName=this.registerForm.get('accountTypeName').value;
      //   this._userRegisterationDto.specialization.specializationName=this.registerForm.get('specializationName').value;
      this._registerFacadeService.register(this._userRegisterationDto, this.accountType).subscribe(
        data => {
          console.log("result after subscribe:",data );
          // redirect to home page and get token 
          // 1- save token in local storage.
          // 2- redirect to home page.
        }
      )




      //     console.log('LoginComponent == onSubmit() ==  if (this.formA.valid) == try');
      //    // await this._registerFacadeService.register(this._userRegisterationDto).subscribe((Date.toString){

      //       await this._registerFacadeService.register(this._userRegisterationDto,this.accountType).subscribe(
      //       (token: string) => {
      //         console.log('LoginComponent == onSubmit() == token: ', token);
      //       }
      //     );
    } catch (err) {
      err: HttpErrorResponse;
      // log()
      this.registerInValid = true;

    }
    // } else {
    //   this.formSubmitAttempt = true;
    // }
  }

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
}

