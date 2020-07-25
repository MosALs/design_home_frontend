import { Injectable } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { AuthenticationRequest } from '../core/models/AuthenticationRequest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadService {

  private  _authenticationRequest: AuthenticationRequest= new AuthenticationRequest();

  constructor(private _authService: AuthenticationService) { }


  checkAuthenticated():boolean{
    console.log("AuthFacadService -- checkAuthenticated");
    return this._authService.checkAuthenticated();
  }

  authenticate(username: string,password: string):Observable<Object>{
    // function call.
    this._authenticationRequest.username=  username;
    this._authenticationRequest.password = password;
    return this._authService.authenticate(this._authenticationRequest);
  }
}
