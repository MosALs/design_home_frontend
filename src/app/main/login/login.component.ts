import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UIPagesUrls } from 'src/app/constants/UI_URLs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService

  ) { }

  async ngOnInit() {
    this.returnUrl = UIPagesUrls.LOGIN_PAGE_URL;

    this.formA = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

    if (await this.authService.checkAuthenticated()) {
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
        await this.authService.login(username, password);
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}

