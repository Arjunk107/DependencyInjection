import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficialDetailsService {
  public offDetails: any[] = [{
    'id': '2016KO',
    'Name': 'Aryan',
    'designation': 'software developer',
    'Salary': '25000',
    'Dateofjoin': '25/3/2013'
  },
  {
    'id': '2016MP',
    'Name': 'Hridya',
    'designation': 'software engineer',
    'Salary': '23500',
    'Dateofjoin': '15/2/2014'
  },
  {
    'id': '2016AS',
    'Name': 'Amal',
    'designation': 'software developer',
    'Salary': '35000',
    'Dateofjoin': '5/11/2010'
  },
  {
    'id': '2016AH',
    'Name': 'Abin',
    'designation': 'software developer',
    'Salary': '15000',
    'Dateofjoin': '12/5/2023'
  }
  ]
  constructor() { }
  getOfficialDetails() {
    return this.offDetails
  }
}
