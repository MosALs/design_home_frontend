import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mainsearchnavbar',
  templateUrl: './mainsearchnavbar.component.html',

  styleUrls: ['./mainsearchnavbar.component.css']
})
export class MainsearchnavbarComponent implements OnInit {

  model = new mainSearchModel();


  // COUNTRY , GOV, AREA LISTS
  private ALL_Countries: Country[] = [
    { cid: 11, name: 'Egypt' },
    { cid: 12, name: 'Saudi Arabia' },
    { cid: 13, name: 'Jordan' },
    { cid: 14, name: 'Lebanon' }
  ];
  private ALL_Governerates: Governorate[] = [
    { gid: 101, name: 'Cairo', cid: 11 },
    { gid: 102, name: 'Giza', cid: 11 },
    { gid: 103, name: 'Alexandria', cid: 11 },
    { gid: 104, name: 'Fayoum', cid: 11 },
    { gid: 105, name: 'Damietta', cid: 11 },
    { gid: 106, name: 'Riyadh', cid: 12 },
    { gid: 107, name: 'Jaddah', cid: 12 },
    { gid: 108, name: 'Dammam', cid: 12 },
    { gid: 109, name: 'Makkah', cid: 12 },
    { gid: 110, name: 'Medina', cid: 12 },
    { gid: 112, name: 'Zarqa', cid: 13 },
    { gid: 113, name: 'Beirut', cid: 13 },
    { gid: 114, name: 'Metn', cid: 13 },
    { gid: 115, name: 'North', cid: 13 },
    { gid: 116, name: 'South', cid: 13 },
    { gid: 117, name: 'Keserwan', cid: 13 },
  ];

  private ALL_Areas: Area[] = [
    { aid: 80, name: 'Maadi', gid: 101 },
    { aid: 81, name: 'Nasr City', gid: 101 },
    { aid: 82, name: 'Shoubra', gid: 101 },
    { aid: 83, name: 'New Cairo', gid: 101 },
    { aid: 84, name: 'West el-Balad', gid: 101 },
    { aid: 85, name: 'Dokki', gid: 102 },
    { aid: 86, name: 'Mohandeseen', gid: 102 },
    { aid: 87, name: 'Haram', gid: 102 },
    { aid: 88, name: 'Faisal', gid: 102 },
    { aid: 89, name: 'Agouza', gid: 102 },
    { aid: 90, name: 'Roshdy', gid: 103 },
    { aid: 91, name: 'Smouha', gid: 103 },
    { aid: 92, name: 'Louran', gid: 103 },
    { aid: 93, name: 'Bahary', gid: 103 },
    { aid: 94, name: 'Cleopatra', gid: 103 },
    { aid: 95, name: 'Ibsheway', gid: 104 },
    { aid: 96, name: 'el-Fayoum City', gid: 104 },
    { aid: 97, name: 'Damietta Elgedida', gid: 105 },
    { aid: 98, name: 'Damietta City', gid: 105 },

  ];
  countryList: Country[] = this.ALL_Countries;
  govenoratesList: Governorate[] = this.ALL_Governerates;
  areasList: Area[] = this.ALL_Areas;
  suitableGovernorateList: Governorate[] = [];
  suitableAreaList: Area[] = [];


  specializationsList= ['نجار','سباك','كهربائى','فني تكييف' ];
  accountTypesList=['صنايعى','محل','شركه'];
 
  // searchForm:FormGroup

  constructor( 
    // private _fb: FormBuilder
  ) {
    
   }

  ngOnInit() {
    // this.searchForm=this._fb.group({
    //   Fcountry:new FormControl('', Validators.required),
    //   Fgovernorate:new FormControl('', Validators.required),
    //   Farea:new FormControl('', Validators.required),
    //   FaccountType:new FormControl('', Validators.required),
    //   Fspecializations:new FormControl('', Validators.required)

    // })
  }

  changeSelectedCountry(event: string) {
    if (event) {
      let counList: Country[] = this.countryList.filter(c => c.name == event);
      let selectedCountry = counList[0];
      this.suitableGovernorateList = this.govenoratesList.filter(g => g.cid == selectedCountry.cid);
    }
  }

  changeSelectedGovernorate(event: string) {
    if (event) {
      let govList: Governorate[] = this.govenoratesList.filter(g => g.name == event);
      let selectedGovenrate = govList[0];
      this.suitableAreaList = this.areasList.filter(a => a.gid == selectedGovenrate.gid);
    }
  }


}

export class mainSearchModel{
  public country?: Country;
  public gov?: Governorate;
  public area?: Area;
  public specialization?: string;
  public accountType?: string;
}

export interface Country {
  cid: number;
  name: string;
}

export interface Governorate {
  gid: number;
  name: string;
  cid: number;
}

export interface Area {
  aid: number;
  name: string;
  gid: number;
}
