import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountRecoveryPasswordResetPage } from './account-recovery-password-reset.page';

describe('AccountRecoveryPasswordResetPage', () => {
  let component: AccountRecoveryPasswordResetPage;
  let fixture: ComponentFixture<AccountRecoveryPasswordResetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRecoveryPasswordResetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
