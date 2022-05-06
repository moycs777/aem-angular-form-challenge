import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBodyHeaderComponent } from './form-body-header.component';

describe('FormBodyHeaderComponent', () => {
  let component: FormBodyHeaderComponent;
  let fixture: ComponentFixture<FormBodyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBodyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
