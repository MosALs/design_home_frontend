import { Injectable } from '@angular/core';
// import { AuthenticationService } from '../core/services/authentication.service';
import { AuthenticationRequest } from '../core/models/model/AuthenticationRequest.model';
import { Observable } from 'rxjs';
import { BackEndFacadeService } from './back-end-facade.service';
// import { IClient } from '../core/models/model/IClient';
// import { UserProfileDto } from '../core/models/dto/UserProfileDto';
import { ReturnedResultModel } from '../core/models/dto/ReturnedResultModel';



@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  private authenticated = false;
  private  _authenticationRequest: AuthenticationRequest= new AuthenticationRequest();
  //private _iclinet:IClient =new IClient();

  constructor(private _backEndFacadService: BackEndFacadeService) { }


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


  getUserInfo(Id: number):Observable<ReturnedResultModel>{
    return this._backEndFacadService.getUserProfileService().getUserProfile(Id);
  }

  // gsetUserProfileInfo(userId:any):Observable<UserProfileDto[]>{
    // return this._backEndFacadService.getUserProfileService().getUserProfileInfo(userId);
    
  // }


}
