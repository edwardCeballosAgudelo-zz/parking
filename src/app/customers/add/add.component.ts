import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public customer: Customer;

  constructor() {

  }

  ngOnInit() {
    this.customer = new Customer();
  }

}
