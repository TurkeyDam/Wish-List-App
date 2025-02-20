import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPage } from './search.page';

describe('SearchPagePage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
