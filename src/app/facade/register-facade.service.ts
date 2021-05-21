import { Injectable } from '@angular/core';
import { UserRegisterationDto } from '../core/models/dto/Userregisterationdto';
import { BackEndFacadeService } from './back-end-facade.service';
import { Observable } from 'rxjs';
import { AccountTypes } from '../core/models/model/AccountTypes';
import { IClient } from '../core/models/model/IClient';


@Injectable({
  providedIn: 'root'
})
export class RegisterFacadeService {

  private _userRegisterationDto:UserRegisterationDto =new UserRegisterationDto();
  constructor(private _backEndFacadService: BackEndFacadeService) { }
  
  checkRegisterAppUser(name:string,username:string,password:string,usermobile:string):String{
    return this._backEndFacadService.getRegistrationService().checkRegisterAppUser(name,username,password,usermobile); 

 }



  register(_userRegisterationDto:UserRegisterationDto,accountType:AccountTypes):Observable<Object>{
  
    if(accountType.company){
      console.log("company == ", accountType.company);
    }
    if(accountType.client){
      console.log("client == ", accountType.client);
    }
    if(accountType.handworker){
      console.log("handworker == ", accountType.handworker);
    }
    if(accountType.shop){
      console.log("shop == ", accountType.shop);
    }
    return this._backEndFacadService.getRegistrationService().register(_userRegisterationDto);
  }
  

     
  newRegister(iclient: IClient):Observable<object>{
    return this._backEndFacadService.getRegistrationService().newServerRegister(iclient);

  }
}
