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
  

}