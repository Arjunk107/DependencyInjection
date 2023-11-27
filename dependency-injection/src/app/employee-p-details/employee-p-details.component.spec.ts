import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePDetailsComponent } from './employee-p-details.component';

describe('EmployeePDetailsComponent', () => {
  let component: EmployeePDetailsComponent;
  let fixture: ComponentFixture<EmployeePDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeePDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeePDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
