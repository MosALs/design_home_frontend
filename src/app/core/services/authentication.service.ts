import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authentication } from 'src/app/constants/BackEnd_URLS';
import { AuthenticationRequest } from '../models/AuthenticationRequest.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _obs:Observable<Object>;


  login(username: any, password: any):String {
    // send to backend
    throw new Error("Method not implemented.");
  }
  checkAuthenticated():boolean{
    //throw new Error("Method not implemented.");
    return true;
  }

  constructor(private http:HttpClient ){ }

  // function definition.
   authenticate(_authenticationRequest: AuthenticationRequest):Observable<Object>{
    this._obs = this.http.post(Authentication.AUTHENTICATE_URL,_authenticationRequest);
    return this._obs;
  }
}
