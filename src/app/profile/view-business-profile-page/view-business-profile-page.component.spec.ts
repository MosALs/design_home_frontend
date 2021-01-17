import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusinessProfilePageComponent } from './view-business-profile-page.component';

describe('ViewBusinessProfilePageComponent', () => {
  let component: ViewBusinessProfilePageComponent;
  let fixture: ComponentFixture<ViewBusinessProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBusinessProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusinessProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
