import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountRecoveryFailPage } from './account-recovery-fail.page';

describe('AccountRecoveryFailPage', () => {
  let component: AccountRecoveryFailPage;
  let fixture: ComponentFixture<AccountRecoveryFailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRecoveryFailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
