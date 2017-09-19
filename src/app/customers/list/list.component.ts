import { CustomerService } from '../customer-service.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

  }

}
