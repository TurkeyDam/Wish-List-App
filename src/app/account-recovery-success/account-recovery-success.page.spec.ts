import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountRecoverySuccessPage } from './account-recovery-success.page';

describe('AccountRecoverySuccessPage', () => {
  let component: AccountRecoverySuccessPage;
  let fixture: ComponentFixture<AccountRecoverySuccessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRecoverySuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
