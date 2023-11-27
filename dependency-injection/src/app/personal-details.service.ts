import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {
  public perDetails: any[] = [{
    'name': 'Aryan',
    'gender': 'male',
    'age': '32',
    'place': 'Kochi'
  },
  {
    'name': 'Hridya',
    'gender': 'female',
    'age': '25',
    'place': 'Kasargod'
  },
  {
    'name': 'Amal',
    'gender': 'male',
    'age': '29',
    'place': 'Kannur'
  },
  {
    'name': 'Abin',
    'gender': 'male',
    'age': '23',
    'place': 'Thrissur'
  }
  ]
  constructor() { }

  getPersonalDetails() {
    return this.perDetails;
  }
}
