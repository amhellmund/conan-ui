import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConanUrlComponent } from './conan-url.component';

describe('ConanUrlComponent', () => {
  let component: ConanUrlComponent;
  let fixture: ComponentFixture<ConanUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConanUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConanUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
