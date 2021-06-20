import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authentication } from 'src/app/constants/BackEnd_URLS';
import { AuthenticationRequest } from '../models/model/AuthenticationRequest.model';
import { Observable } from 'rxjs';
import { addListener } from 'process';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _obs:Observable<Object>;
  private authenticated = false;


  login(username: any, password: any):String {
    // send to backend
    throw new Error("Method not implemented.");
  }
  checkAuthenticated():boolean{
    //throw new Error("Method not implemented.");
    console.log("KMGN ==checkAuthenticated: " ,this.authenticated);
    
    return this.authenticated;
  }
  setAuthenticated(x: boolean){
    this.authenticated = x;
  }



  constructor(private http:HttpClient ){ }

  // function definition.
   authenticate(_authenticationRequest: AuthenticationRequest):Observable<Object>{
    this._obs = this.http.post(Authentication.AUTHENTICATE_URL, _authenticationRequest);
    return this._obs;
  }
}
