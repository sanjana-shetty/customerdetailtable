import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
@Input() show:string;
@Input() id:number;
@Input() name:string;
@Input() newAge:number;
@Input() newNo:number;


  constructor() { }

  ngOnInit() {
  }


  updateCust(id:any,Age:any,No: any){
  
    console.log(id,Age,No)
  }
}
