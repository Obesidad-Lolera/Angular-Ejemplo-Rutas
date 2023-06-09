import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatThreeComponent } from './cat-three.component';

describe('CatThreeComponent', () => {
  let component: CatThreeComponent;
  let fixture: ComponentFixture<CatThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatThreeComponent]
    });
    fixture = TestBed.createComponent(CatThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
