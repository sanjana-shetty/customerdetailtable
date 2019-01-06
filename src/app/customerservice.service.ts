import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor() {}

  Customer:any[] = [
    {"customerId":"101","customerName":"Kiran","customerAge":"25","customeMobileNumber":"9234567890"},
    {"customerId":"102","customerName":"Rajesh","customerAge":"32","customeMobileNumber":"9123457788"},
    {"customerId":"103","customerName":"Keerthi","customerAge":"26","customeMobileNumber":"9123446789"}
  ];

  getCustomer(): any[] {
       return this.Customer;
  }
}
