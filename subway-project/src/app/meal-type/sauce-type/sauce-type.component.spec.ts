import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauceTypeComponent } from './sauce-type.component';

describe('SauceTypeComponent', () => {
  let component: SauceTypeComponent;
  let fixture: ComponentFixture<SauceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
