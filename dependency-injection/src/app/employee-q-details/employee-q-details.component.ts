import { Component, OnInit } from '@angular/core';
import { OfficialDetailsService } from '../official-details.service';
@Component({
  selector: 'app-employee-q-details',
  templateUrl: './employee-q-details.component.html',
  styleUrls: ['./employee-q-details.component.scss']
})
export class EmployeeQDetailsComponent implements OnInit {
  offdetails: any[] = []
  constructor(private officiald: OfficialDetailsService) { }

  ngOnInit(): void {
    this.offdetails = this.officiald?.getOfficialDetails();
  }
}
