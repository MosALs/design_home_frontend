import { Injectable } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { AuthenticationRequest } from '../core/models/AuthenticationRequest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadService {

  constructor(private _authService: AuthenticationService) { }


  checkAuthenticated():boolean{
    console.log("AuthFacadService -- checkAuthenticated");
    return this._authService.checkAuthenticated();
  }

  authenticate(_authenticationRequest:AuthenticationRequest):Observable<Object>{
    // function call.
    return this._authService.authenticate(_authenticationRequest);
  }
}
