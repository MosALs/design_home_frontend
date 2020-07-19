import { Injectable } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadService {

  constructor(private _authService: AuthenticationService) { }


  checkAuthenticated():boolean{
    console.log("AuthFacadService -- checkAuthenticated");
    return this._authService.checkAuthenticated();
  }

}
