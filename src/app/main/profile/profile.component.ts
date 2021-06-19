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


@Component({
  selector: 'userProfile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private returnUrl: string;
  public client: IClient = {} as IClient;
  public clients: IClient[];
  public errorMessage: string = '';


  constructor(   private router: Router,
    private _authFacadServie:AuthFacadeService,
    private clientService: ClientService,
    private _backendFacadService: BackEndFacadeService
   

    ) { }

  async ngOnInit() {
    console.log("ProfileComponent ---- ngOnInit");
    

    this._backendFacadService.getUserProfileService().getUserProfile(101511).subscribe(
      (data:ReturnedResultModel) => {
        console.log('KMGN == data: ',data);
        if(data.error.includes('no error')) {
          let userProfile = data.result as UserProfileDto;
          console.log('KMGN == user profile: ',userProfile);
        }
        else{
          console.log('KMGN == error getting user profile: ',data.error+", "+data.message);
        }
      },
      (error) => {
        console.log(error);
        
      }
    )

  //   this.returnUrl = UIPagesUrls.LOGIN_PAGE_URL;
  //   if (await this._authFacadServie.checkAuthenticated()) {
  //     await this.router.navigate([this.returnUrl]);
  //   }
  // }
  this.clientService.getAllClients().subscribe((data) => {
    this.clients = data;
    console.log("clients", this.clients)
  }, (error) => {
    this.errorMessage = error;
  });

  
// this._authFacadServie.getUserInfo(1009).subscribe((data)=>{
//   console.log(data)
// });

}

// @PostMApping(value="/product/update")
// public String updateProduct(@RequestBody Product product){
      // if(product.getId() != null){
//          Optional<Product> product = productRepository.save(product);
      // }
//     
//     return "product updated suceessfully";
// }


}