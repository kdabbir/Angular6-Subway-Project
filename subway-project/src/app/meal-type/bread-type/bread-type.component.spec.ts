import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadTypeComponent } from './bread-type.component';

describe('BreadTypeComponent', () => {
  let component: BreadTypeComponent;
  let fixture: ComponentFixture<BreadTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
