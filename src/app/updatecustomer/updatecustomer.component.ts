import { Component, OnInit ,Input, Output} from '@angular/core';
import {CustomerserviceService} from '../customerservice.service';


@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
@Input() show:boolean;
@Input() id:number;
@Input() name:string;
@Input() newAge:number;
@Input() newNo:number;



  constructor(private custservice:CustomerserviceService) { }

  ngOnInit() {
  }


  updateCust(id:any,Age:any,No: any){
    for(var i=0;i<this.custservice.Customer.length;i++){
      if(this.custservice.Customer[i].customerId==id){
        this.custservice.Customer[i].customerAge= Age;
        this.custservice.Customer[i].customeMobileNumber=No;
      }
    }
     this.show=false;
     alert("Updated successfully")
  }
}
