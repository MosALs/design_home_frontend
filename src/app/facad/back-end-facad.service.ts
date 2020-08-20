import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { RegistrationService } from '../core/services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class BackEndFacadService {

  private _authService: AuthenticationService;
  private _registrationService: RegistrationService;
  constructor(private injector: Injector

  ) { }


  public getAuthenticationService(): AuthenticationService {
    if (!this._authService) {
      this._authService = this.injector.get(AuthenticationService);
    }
    return this._authService;
  }

  

  public getRegistrationService(): RegistrationService {

    if (!this._registrationService) {
      this._registrationService = this.injector.get(RegistrationService);
    }
    return this._registrationService;
  }



}
