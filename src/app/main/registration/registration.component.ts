import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterFacadeService } from 'src/app/facad/register-facad.service';
import { UserRegisterationDto } from 'src/app/core/models/dto/Userregisterationdto';
import { HttpErrorResponse } from '@angular/common/http';
import { observable } from 'rxjs';
import { Specialization } from 'src/app/core/models/entities/Specialization.entity';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _userRegisterationDto:UserRegisterationDto =new UserRegisterationDto();
  registerForm: FormGroup;
  public registerInValid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _registerFacadeService:RegisterFacadeService
  ) { }

  async ngOnInit() {
    //العلاقه لو مش عامل لوجن يروح يعمل لوجن الاول 
   // this.returnUrl = UIPagesUrls.LOGIN_PAGE_URL;
      
    this.registerForm = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
      mobile:['',Validators.required]
    });
  }

  async onSubmit() {
   
    this.registerInValid=false;
    this.formSubmitAttempt = false;
    if (this.registerForm.valid) {
      try {
        this._userRegisterationDto.appuser.name = this.registerForm.get('name').value;
        this._userRegisterationDto.appuser.userName = this.registerForm.get('username').value;
        this._userRegisterationDto.appuser.password = this.registerForm.get('password').value;
        this._userRegisterationDto.appuser.userMobile = this.registerForm.get('mobile').value;
        this._userRegisterationDto.appuser.active = this.registerForm.get('active').value;
        this._userRegisterationDto.areas.areaName=this.registerForm.get('areaName').value;
        this._userRegisterationDto.location.locationName=this.registerForm.get('locationName').value;
        this._userRegisterationDto.accountType.accountTypeName=this.registerForm.get('accountTypeName').value;
        this._userRegisterationDto.specialization.specializationName=this.registerForm.get('specializationName').value;
        if(this._userRegisterationDto.appuser !=null){
   

        }
        console.log('LoginComponent == onSubmit() ==  if (this.formA.valid) == try');
       // await this._registerFacadeService.register(this._userRegisterationDto).subscribe((Date.toString){
      
          await this._registerFacadeService.register(this._userRegisterationDto).subscribe(
          (token: string) => {
            console.log('LoginComponent == onSubmit() == token: ', token);
          }
        );
      } catch (err) {
        err:HttpErrorResponse;
       // log()
        this.registerInValid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
