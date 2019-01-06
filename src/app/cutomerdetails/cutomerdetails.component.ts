import { Component, OnInit, ElementRef } from '@angular/core';
import {CustomerserviceService} from '../customerservice.service';

@Component({
  selector: 'app-cutomerdetails',
  templateUrl: './cutomerdetails.component.html',
  styleUrls: ['./cutomerdetails.component.css'],
  providers: [CustomerserviceService]
})
export class CutomerdetailsComponent implements OnInit {
   customers :any []=null;
   public show:boolean = false;
   public id:number;
   public name:string;
   public newAge:number;
   public newNo:number;

  constructor(private custservice:CustomerserviceService) { 
    this.customers=this.custservice.getCustomer();
  }

  ngOnInit() {
  }


  toggle() {
    this.show = !this.show;
  }
  Fetchdetails(selectedItem: any){
    
     this.id=selectedItem.customerId
     this.name=selectedItem.customerName
     this.newAge=selectedItem.customerAge
     this.newNo=selectedItem.customeMobileNumber

  }
  updateCust(id:any,Age:any,No: any){
  
    console.log(id,Age,No)
  }

}
