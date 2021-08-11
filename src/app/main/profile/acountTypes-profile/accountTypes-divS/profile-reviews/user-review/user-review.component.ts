import { Component, Input, OnInit } from '@angular/core';
import { UserProfileDto } from 'src/app/core/models/dto/UserProfileDto';

@Component({
  selector: 'review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
  @Input() userProfile: UserProfileDto;
  constructor() { }

  ngOnInit(): void {
  }

}
