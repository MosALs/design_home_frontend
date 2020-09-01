import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UIPagesUrls } from 'src/app/constants/UI_URLs';
import { AuthenticationRequest } from 'src/app/core/models/model/AuthenticationRequest.model';
import {HttpErrorResponse} from "@angular/common/http";
import { AuthFacadeService } from 'src/app/facade/auth-facade.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formA: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authFacadService: AuthFacadeService
  ) { }

  async ngOnInit() {
    this.returnUrl = UIPagesUrls.LOGIN_PAGE_URL;
   
    this.formA = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

    if (await this._authFacadService.checkAuthenticated()) {
      await this.router.navigate([this.returnUrl]);
    }
  }


  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.formA.valid) {
      try {
        const username = this.formA.get('username').value;
        const password = this.formA.get('password').value;
        console.log('LoginComponent == onSubmit() ==  if (this.formA.valid) == try');
        await this._authFacadService.authenticate(username,password).subscribe(
          (token: string) => {
            console.log('LoginComponent == onSubmit() == token: ', token);
          }
        );
      } catch (err) {
        err:HttpErrorResponse;
       // log()
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}

