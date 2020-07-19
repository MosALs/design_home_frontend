import { Component, OnInit } from '@angular/core';
import { UIPagesUrls } from 'src/app/constants/UI_URLs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { BackEndFacadService } from 'src/app/facad/back-end-facad.service';
import { AuthFacadService } from 'src/app/facad/auth-facad.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private returnUrl: string;
  
  constructor(   private router: Router,
    private _authFacadServie:AuthFacadService) { }

  async ngOnInit() {
    console.log("ProfileComponent -- ngOnInit");
    
    this.returnUrl = UIPagesUrls.LOGIN_PAGE_URL;
    if (await this._authFacadServie.checkAuthenticated()) {
      await this.router.navigate([this.returnUrl]);
    }
  }

}

// @PostMApping(value="/product/update")
// public String updateProduct(@RequestBody Product product){
      // if(product.getId() != null){
//          Optional<Product> product = productRepository.save(product);
      // }
//     
//     return "product updated suceessfully";
// }




