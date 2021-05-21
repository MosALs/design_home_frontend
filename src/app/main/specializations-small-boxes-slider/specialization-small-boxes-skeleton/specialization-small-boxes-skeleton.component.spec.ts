import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationSmallBoxesSkeletonComponent } from './specialization-small-boxes-skeleton.component';

describe('SpecializationSmallBoxesSkeletonComponent', () => {
  let component: SpecializationSmallBoxesSkeletonComponent;
  let fixture: ComponentFixture<SpecializationSmallBoxesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationSmallBoxesSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationSmallBoxesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
