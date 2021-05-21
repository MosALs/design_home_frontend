import { Injectable, Injector } from '@angular/core';
import { RegistrationService } from '../core/services/registration.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { UserSearchView } from '../core/models/entities/SearchView';
import { UaerSearchDtoService } from '../core/services/uaer-search-dto.service';
import { UserProfileService } from '../core/services/user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class BackEndFacadeService {

  private _authService: AuthenticationService;
  private _registrationService: RegistrationService;
  private  _userProfileService:UserProfileService;
  // private _uaerSearchDtoService :UaerSearchDtoService;
  
  constructor(private injector: Injector) { }


  public getAuthenticationService(): AuthenticationService {
    if (!this._authService) {
      this._authService = this.injector.get(AuthenticationService);
    }
    return this._authService;
  }

  

  public getRegistrationService(): RegistrationService {

    if (!this._registrationService) {
      this._registrationService = this.injector.get(RegistrationService);
    }
    return this._registrationService;
  }


  public getUserProfileService():UserProfileService {
   if(!this._userProfileService){
      this._userProfileService=this.injector.get(UserProfileService);

    }
    return this._userProfileService;
  }

  // public getUaerSearchDtoService():UaerSearchDtoService{
  //   if(!this._uaerSearchDtoService){
  //     this._uaerSearchDtoService= this.injector.get(UaerSearchDtoService);
  //   }
  //   return this._uaerSearchDtoService;
  // }



}
