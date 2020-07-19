import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BackEndFacadService {

  private _authService: AuthenticationService;

  constructor(private injector: Injector) { }


  public getAuthenticationService(): AuthenticationService {
    if(!this._authService){
      this._authService = this.injector.get(AuthenticationService);
    }
    return this._authService;
  }

  
}
