import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTwoComponent } from './cat-two.component';

describe('CatTwoComponent', () => {
  let component: CatTwoComponent;
  let fixture: ComponentFixture<CatTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatTwoComponent]
    });
    fixture = TestBed.createComponent(CatTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
