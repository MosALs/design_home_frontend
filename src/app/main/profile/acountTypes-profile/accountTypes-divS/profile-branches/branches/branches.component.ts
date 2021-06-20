import { Component, Input, OnInit } from '@angular/core';
import { UserProfileDto } from 'src/app/core/models/dto/UserProfileDto';

@Component({
  selector: 'branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  @Input() userProfile: UserProfileDto;
  constructor() { }

  ngOnInit(): void {
  }

}
