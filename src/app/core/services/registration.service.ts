import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRegisterationDto } from '../models/dto/Userregisterationdto';
import { Authentication } from 'src/app/constants/BackEnd_URLS';
import { Data } from '@angular/router';
import { IClient } from '../models/model/IClient';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private _obs: Observable<Object>;
  // private _userregisterationdto:UserRegisterationDto;

  checkRegisterAppUser(name: string, username: string, password: string, usermobile: string): String {
    throw new Error("ok");
  }
  checkRegisterAccountType(accountTypeName: string): String {
    throw new Error("ok");
  }
  checkRegisterAreas(areaName: string): String {
    throw new Error("ok");
  }
  checkRegisterLocation(locationName: string): String {
    throw new Error("ok");
  }
  checkRegisterSpecialization(specializationName: string): String {
    throw new Error("ok");
  }
  checkRegistershop(shopName: string, street: string, startDate: Data, active: boolean): String {
    throw new Error("ok");
  }

  constructor(private http: HttpClient) { }


  register(_userRegisterationDto: UserRegisterationDto): Observable<object> {

    this._obs = this.http.post(Authentication.REGISTERATION_URL, _userRegisterationDto)
    return this._obs;
  }

  newServerRegister(iclient: IClient): Observable<object> {

    console.log('registeration service iclient: ',iclient );
    
    this._obs = this.http.post(Authentication.REGISTERATION_URL, iclient)
    return this._obs;
  }

}
