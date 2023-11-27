import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeQDetailsComponent } from './employee-q-details.component';

describe('EmployeeQDetailsComponent', () => {
  let component: EmployeeQDetailsComponent;
  let fixture: ComponentFixture<EmployeeQDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeQDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeeQDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
