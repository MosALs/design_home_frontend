import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UIPagesUrls } from 'src/app/constants/UI_URLs';
import { AuthenticationRequest } from 'src/app/core/models/model/AuthenticationRequest.model';
import { HttpErrorResponse } from "@angular/common/http";
import { AuthFacadeService } from 'src/app/facade/auth-facade.service';
// import jwtDecode from 'jwt-decode';
import jwt_decode from "jwt-decode";
import { AppUser } from '../../core/models/entities/AppUser.entity';
import { AuthenticationResponse } from 'src/app/core/models/model/AuthenticationResponse.model';
import { AuthenticationService } from '../../core/services/authentication.service';


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
  hide = true;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authFacadService: AuthFacadeService,
    private authService: AuthenticationService
  ) {
    console.log("KMGN == login component constructor");
  }

  async ngOnInit() {
    console.log("KMGN == login component ngOnInit");
    this.returnUrl = UIPagesUrls.PROFILE_FORM_PAGE_URL;

    this.formA = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

    if (await this._authFacadService.checkAuthenticated()) {

      await this.router.navigate([this.returnUrl]);

    // }
    // var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb2hlcjEyM0BnbWFpbC5jb20iLCJyb2xlIjp7ImF1dGhvcml0eSI6Iti12YbYp9mK2LnZiSJ9LCJhY3RpdmUiOmZhbHNlLCJ1c2VyR2VuZGVyIjpudWxsLCJleHAiOjE2MjQxMTQ2MTcsInVzZXJpZCI6MSwiaWF0IjoxNjIyMzE0NjE3fQ.DGLTq4bXZR_NXX_U_W7ovk_x6c2ZX7TynzXeHV8yGGk";
    //  var decoded = jwt_decode(token);
    //  console.log("KMGN == decoded token: ",decoded);

  }

  }

  // onS1ubmt(){
  //   this.authService.setAuthenticated(true);
  //   this.router.navigate([this.returnUrl]);
  // }

  async onSubmit() {
    console.log('LoginComponent == onSubmit()');
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.formA.valid) {
      console.log('LoginComponent == onSubmit() == try ');
      try {
        const username = this.formA.get('username').value;
        const password = this.formA.get('password').value;
        console.log('LoginComponent == onSubmit() ==  if (this.formA.valid) == try');
        await this._authFacadService.authenticate(username, password).subscribe(
          (token: AuthenticationResponse) => {
            this.authService.setAuthenticated(true);
            this.router.navigate([this.returnUrl]);
            console.log('LoginComponent == onSubmit() == token: ', token);
            var decoded: any = jwt_decode(token.jwt);
           
            console.log("KMGN == decoded token: ", decoded);
            let Id = decoded.userid;

            console.log("KMGN == user id: ", Id);
            localStorage.setItem("userId", Id);

          }
        );
      } catch (err) {
        this.authService.setAuthenticated(false);
        err: HttpErrorResponse;
        // log()
        console.log('LoginComponent == onSubmit() == errer');
        this.loginInvalid = true;
      }
    } else {

      this.formSubmitAttempt = true;
 
    }
  }


}

