import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UIPagesUrls } from 'src/app/constants/UI_URLs';
import { AuthFacadService } from 'src/app/facad/auth-facad.service';
import { AuthenticationRequest } from 'src/app/core/models/AuthenticationRequest.model';

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
  private  _authenticationRequest :AuthenticationRequest;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _authFacadService: AuthFacadService
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
        this._authenticationRequest.username = username;
        this._authenticationRequest.password = password;
        console.log("LoginComponent == onSubmit() ==  if (this.formA.valid) == try")
        await this._authFacadService.authenticate(this._authenticationRequest).subscribe(
          (token:String) => {
            console.log("LoginComponent == onSubmit() == token: ",token);
            
          } 
        );
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}

