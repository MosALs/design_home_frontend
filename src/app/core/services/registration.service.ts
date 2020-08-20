import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRegisterationDto } from '../models/dto/Userregisterationdto';
import { Authentication } from 'src/app/constants/BackEnd_URLS';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private _obs:Observable<Object>;

  constructor(private http:HttpClient ) { }

  register(_userRegisterationDto: UserRegisterationDto):Observable<object>{

    this._obs = this.http.post(Authentication.REGISTERATION_URL,_userRegisterationDto)
    return this._obs;
  }

}
