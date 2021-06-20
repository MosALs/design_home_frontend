import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, AfterViewInit } from '@angular/core';
import { UserProfileDto } from 'src/app/core/models/dto/UserProfileDto';

@Component({
  selector: 'userdetails',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // @Output() public sendData = new EventEmitter<string>();
  @Input() userProfile: UserProfileDto;
  constructor() { }


  ngOnInit(): void {
    console.log('user details compo ngonint');
    console.log('name ====', this.userProfile);

  }
}

// }
