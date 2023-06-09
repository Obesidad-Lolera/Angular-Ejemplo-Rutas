import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatOneComponent } from './cat-one.component';

describe('CatOneComponent', () => {
  let component: CatOneComponent;
  let fixture: ComponentFixture<CatOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatOneComponent]
    });
    fixture = TestBed.createComponent(CatOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
