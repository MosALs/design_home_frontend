import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfProfilePageComponent } from './edit-self-profile-page.component';

describe('EditSelfProfilePageComponent', () => {
  let component: EditSelfProfilePageComponent;
  let fixture: ComponentFixture<EditSelfProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSelfProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
