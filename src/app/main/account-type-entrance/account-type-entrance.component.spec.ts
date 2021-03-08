import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypeEntranceComponent } from './account-type-entrance.component';

describe('AccountTypeEntranceComponent', () => {
  let component: AccountTypeEntranceComponent;
  let fixture: ComponentFixture<AccountTypeEntranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTypeEntranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
