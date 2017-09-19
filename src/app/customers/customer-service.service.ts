import { Customer } from './customer';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  customersList: Array<Customer>;

  constructor() {
    this.customersList = [
      {
        name: 'edward',
        address: 'vereda',
        gender: 'male',
        stratum: 3
      },
      {
        name: 'pipe',
        address: 'vereda',
        gender: 'female',
        stratum: 4
      }
    ];
  }

}
