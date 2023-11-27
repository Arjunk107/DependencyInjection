import { Component, OnInit } from '@angular/core';
import { PersonalDetailsService } from '../personal-details.service';

@Component({
  selector: 'app-employee-p-details',
  templateUrl: './employee-p-details.component.html',
  styleUrls: ['./employee-p-details.component.scss']
})
export class EmployeePDetailsComponent implements OnInit {
  perdetails: any[] = []

  constructor(private pdetails: PersonalDetailsService) { }
  ngOnInit(): void {
    this.perdetails = this.pdetails?.getPersonalDetails();
  }
}
