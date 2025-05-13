import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NameRecoveryPage } from './name-recovery.page';

describe('NameRecoveryPage', () => {
  let component: NameRecoveryPage;
  let fixture: ComponentFixture<NameRecoveryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NameRecoveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
