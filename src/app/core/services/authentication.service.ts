import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login(username: any, password: any):String {
    // send to backend
    throw new Error("Method not implemented.");
  }
  checkAuthenticated():boolean{
    //throw new Error("Method not implemented.");
    return true;
  }

  constructor()
   { }
}
