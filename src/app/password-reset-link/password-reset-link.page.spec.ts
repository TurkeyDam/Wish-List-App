import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordResetLinkPage } from './password-reset-link.page';

describe('PasswordResetLinkPage', () => {
  let component: PasswordResetLinkPage;
  let fixture: ComponentFixture<PasswordResetLinkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
