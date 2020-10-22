import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsearchnavbarComponent } from './mainsearchnavbar.component';

describe('MainsearchnavbarComponent', () => {
  let component: MainsearchnavbarComponent;
  let fixture: ComponentFixture<MainsearchnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsearchnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsearchnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
