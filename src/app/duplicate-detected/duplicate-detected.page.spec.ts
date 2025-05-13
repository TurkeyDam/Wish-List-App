import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuplicateDetectedPage } from './duplicate-detected.page';

describe('DuplicateDetectedPage', () => {
  let component: DuplicateDetectedPage;
  let fixture: ComponentFixture<DuplicateDetectedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateDetectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
