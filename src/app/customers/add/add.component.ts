import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer-service.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public customer: Customer;

  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
    this.customer = new Customer();
  }

  onSaveClick() {
    this.customerService.customersList.push(this.customer);
  }

  onNewClick() {
    this.customer = new Customer();
  }

}
