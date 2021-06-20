import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfileDto } from '../models/dto/UserProfileDto';
import { Observable } from 'rxjs';
import { UaerProfileInfoURL } from 'src/app/constants/BackEnd_URLS';
// import { userInfo } from 'os';
// import { UserProfile } from '../../main/registration/registration.component';
import { retry, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../models/utils/ErrorHandler';
import { ReturnedResultModel } from '../models/dto/ReturnedResultModel';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private _obs: Observable<Object>;
  constructor(private http: HttpClient) { }

  // // function definition.
  // authenticate(_authenticationRequest: AuthenticationRequest): Observable<Object> {
  //   this._obs = this.http.post(Authentication.AUTHENTICATE_URL, _authenticationRequest);
  //   return this._obs;
  // }

  getUserProfile(Id: number): Observable<ReturnedResultModel> {
    let result :Observable<ReturnedResultModel> = 
    this.http.get(UaerProfileInfoURL.USERPROFILE_URL + '/'+Id) as Observable<ReturnedResultModel>;
    return result;
  }
    
    // public getAllClients(): Observable<IClient[]> {
    // return this.httpClient.get<IClient[]>(this.dataURL).pipe(
    //   retry(1),
    //   catchError(ErrorHandler.handleErrors)
    // );

  //  public getUserProfileInfo(userId:number):Observable<UserProfileDto[]>{
  //    return this.http.get<UserProfileDto[]>(UaerProfileInfoURL.USERPROFILE_URL + '?'+userId)
  //    .pipe(retry(1),catchError(ErrorHandler.handleErrors));
     
  //  } 
  
}
