import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsSmallBoxesSliderComponent } from './specializations-small-boxes-slider.component';

describe('SpecializationsSmallBoxesSliderComponent', () => {
  let component: SpecializationsSmallBoxesSliderComponent;
  let fixture: ComponentFixture<SpecializationsSmallBoxesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationsSmallBoxesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationsSmallBoxesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
