import { Component, OnInit } from '@angular/core';
import { UIPagesUrls } from 'src/app/constants/UI_URLs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { AuthFacadeService } from 'src/app/facade/auth-facade.service';
import { IClient } from 'src/app/core/models/model/IClient';
import { ClientService } from 'src/app/core/services/client.service';
import { BackEndFacadeService } from '../../facade/back-end-facade.service';
import { UserProfileDto } from '../../core/models/dto/UserProfileDto';
import { ReturnedResultModel } from '../../core/models/dto/ReturnedResultModel';
import { UserDataCollectionDTO } from '../../core/models/dto/UserDataCollectionDTO';
import { UserProfile } from '../registration/registration.component';
import { PhoneEntity } from '../../core/models/entities/phone.entity';


@Component({
  selector: 'userProfile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // private returnUrl: string;
  // public client: IClient = {} as IClient;
  // public clients: IClient[];
  // public errorMessage: string = '';

  // private userProfileDto:UserProfileDto;
  phoneList: PhoneEntity[];
  userProfile: UserProfileDto; // 1- undefined 2- oninit -> call service - set userProfile with data 
  userDataCollection: UserDataCollectionDTO;
  userDataCollectionList: UserDataCollectionDTO[];

  constructor(private router: Router,
    private _authFacadServie: AuthFacadeService,
    private clientService: ClientService,
    private _backendFacadService: BackEndFacadeService


  ) { }

  // UserProfile = UserProfile;
  // sendData(event) {
  //   console.log(event);
    
    // this.UserProfile = UserProfile;
  // }
  returnUrl
  async ngOnInit() {
    console.log("KMGN == profile component ngOnInit");
    this.returnUrl = UIPagesUrls.PROFILE_FORM_PAGE_URL;
    // console.log("userProfileDtos", this.userProfileDto)



    if (await this._authFacadServie.checkAuthenticated()) {

      await this.router.navigate([this.returnUrl]);

    }
    console.log("ProfileComponent ---- ngOnInit");
    // get id from shared data servive  or from ngrx or from localstorage

    let userId: string = localStorage.getItem('userId');
    // let Id:number =parseInt(userId);
    let Id: number = parseInt(userId);

    await this._backendFacadService.getUserProfileService().getUserProfile(Id).subscribe(
      (data: ReturnedResultModel) => {
        console.log('KMGN == data: ', data);
        if (data.error.includes('no error')) {
          this.userProfile = data.result as UserProfileDto;
          // this.userDataCollection = data.result as UserDataCollectionDTO;

          console.log('KMGN == user profile: ', this.userProfile);
          // console.log('user collection locationName[0]: ',this.userProfile.userCollection[0].locationName);
          // console.log('user collection phone[0]: ',this.userProfile.userCollection[0].phone);
          // console.log('user collection phone[0]: ',this.userProfile.userCollection[0].phone.mobileOne);
          // console.log('user collection spectialization[0]: ',this.userProfile.userCollection[0].specializationName);
          // console.log('KMGN == user profile: ',this.userDataCollection);

        }

        else {
          console.log('KMGN == error getting user profile: ', data.error + ", " + data.message);
        }
      },
      (error) => {
        console.log(error);

      }
    )
  }
  //   this.returnUrl = UIPagesUrls.LOGIN_PAGE_URL;
  //   if (await this._authFacadServie.checkAuthenticated()) {
  //     await this.router.navigate([this.returnUrl]);
  //   }
  // }
  // this.clientService.getAllClients().subscribe((data) => {
  //   this.clients = data;
  //   console.log("clients", this.clients)
  // }, (error) => {
  //   this.errorMessage = error;
  // });


  // this._authFacadServie.getUserInfo(1009).subscribe((data)=>{
  //   console.log(data)
  // });


  // @PostMApping(value="/product/update")
  // public String updateProduct(@RequestBody Product product){
  // if(product.getId() != null){
  //          Optional<Product> product = productRepository.save(product);
  // }
  //     
  //     return "product updated suceessfully";
  // }
  // value="";
  // sendData(value){
  //     this.value=value;
  //   }



}


