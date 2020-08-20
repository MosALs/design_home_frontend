import { Injectable } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { AuthenticationRequest } from '../core/models/AuthenticationRequest.model';
import { Observable } from 'rxjs';
import { BackEndFacadService } from './back-end-facad.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadService {

  private  _authenticationRequest: AuthenticationRequest= new AuthenticationRequest();

  constructor(private _backEndFacadService: BackEndFacadService) { }


  checkAuthenticated():boolean{
    console.log("AuthFacadService -- checkAuthenticated");
    return this._backEndFacadService.getAuthenticationService().checkAuthenticated();
  }

  authenticate(username: string,password: string):Observable<Object>{
    // function call.
    this._authenticationRequest.username=  username;
    this._authenticationRequest.password = password;
    return this._backEndFacadService.getAuthenticationService().authenticate(this._authenticationRequest);
  }
}
