import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UaerSearchAll } from 'src/app/constants/BackEnd_URLS';
import { UaerSearchDto } from '../models/dto/UserSearchdto';


@Injectable({
  providedIn: 'root'
})
export class UaerSearchDtoService {
  private _obs: Observable<Object>;
  userSearch(areaName: any, specializationName: any, accountTypeName: any, governoratName: any, country: any): String {
    // send to backend
    throw new Error("Method not implemented.");
  }
  checkUserSearchDto():boolean{
    //throw new Error("Method not implemented.");
    return true;
  }

  constructor(private http: HttpClient) { }

    // function definition.
    // SearchDto(_uaerSearchDto:UaerSearchDto ):Observable<Object>{
    //   this._obs = this.http.get(UaerSearchAll.USERSEARCHDTO_URL,_uaerSearchDto);
    //   return this._obs;
    // }
}
