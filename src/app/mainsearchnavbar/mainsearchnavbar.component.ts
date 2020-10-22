import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mainsearchnavbar',
  templateUrl: './mainsearchnavbar.component.html',

  styleUrls: ['./mainsearchnavbar.component.css']
})
export class MainsearchnavbarComponent implements OnInit {

  country= ['مصر'];
  governorates=['القاهره','الجيزه','اسكندريه'];
  specialization= ['نجار','سباك','كهربائى' ];
  accountTypes=['صنايعى','محل','شركه'];
  areas=['هرم','فيصل','مريوطيه','ابوالهول'];

  constructor() { }

  ngOnInit() {
  }

}
