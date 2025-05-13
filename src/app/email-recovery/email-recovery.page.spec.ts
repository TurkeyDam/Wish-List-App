import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailRecoveryPage } from './email-recovery.page';

describe('EmailRecoveryPage', () => {
  let component: EmailRecoveryPage;
  let fixture: ComponentFixture<EmailRecoveryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailRecoveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
