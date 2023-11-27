import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeePDetailsComponent } from './employee-p-details/employee-p-details.component';
import { EmployeeQDetailsComponent } from './employee-q-details/employee-q-details.component';

const routes: Routes = [
  {
    path: 'pdetails',
    component: EmployeePDetailsComponent
  },
  {
    path: 'odetails',
    component: EmployeeQDetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
