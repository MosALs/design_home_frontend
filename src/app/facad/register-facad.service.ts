import { Injectable } from '@angular/core';
import { UserRegisterationDto } from '../core/models/dto/Userregisterationdto';
import { BackEndFacadService } from './back-end-facad.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterFacadeService {

  private _userRegisterationDto:UserRegisterationDto =new UserRegisterationDto();
  constructor(private _backEndFacadService: BackEndFacadService) { }



  register(_userRegisterationDto:UserRegisterationDto):Observable<Object>{
    
    return this._backEndFacadService.getRegistrationService().register(_userRegisterationDto);
  }
  
}
