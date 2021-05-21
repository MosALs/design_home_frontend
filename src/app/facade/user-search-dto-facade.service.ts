import { Injectable } from '@angular/core';
import { BackEndFacadeService } from './back-end-facade.service';
import { UaerSearchDto } from '../core/models/dto/UserSearchdto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UaerSearchAll } from '../constants/BackEnd_URLS';

@Injectable({
  providedIn: 'root'
})
export class UserSearchDtoFacadeService {

  //  private _uaerSearchDto:UaerSearchDto=new UaerSearchDto();

  constructor(private http:HttpClient) { }
  // SearchDto( _uaerSearchDto:UaerSearchDto):Observable<Object>{
  //    // function call.
  //    return this.http.post(UaerSearchAll.USERSEARCHDTO_URL,_uaerSearchDto);
  // }

}
