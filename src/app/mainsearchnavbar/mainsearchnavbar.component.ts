import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mainsearchnavbar',
  templateUrl: './mainsearchnavbar.component.html',

  styleUrls: ['./mainsearchnavbar.component.css']
})
export class MainsearchnavbarComponent implements OnInit {

  countries= ['مصر'];
  governorates=['القاهره','الجيزه','اسكندريه'];
  specializations= ['نجار','سباك','كهربائى' ];
  accountTypes=['صنايعى','محل','شركه'];
  areas=['هرم','فيصل','مريوطيه','ابوالهول'];
 
  searchForm:FormGroup

  constructor( 
    private _fb: FormBuilder
  ) {
    
   }

  ngOnInit() {
    this.searchForm=this._fb.group({
      Fcountry:new FormControl('', Validators.required),
      Fgovernorate:new FormControl('', Validators.required),
      Farea:new FormControl('', Validators.required),
      FaccountType:new FormControl('', Validators.required),
      Fspecializations:new FormControl('', Validators.required)

    })
  }


}
