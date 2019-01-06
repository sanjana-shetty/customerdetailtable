import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { CutomerdetailsComponent } from './cutomerdetails/cutomerdetails.component';
import {CustomerserviceService} from './customerservice.service';


@NgModule({
  declarations: [
    AppComponent,
    UpdatecustomerComponent,
    CutomerdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
