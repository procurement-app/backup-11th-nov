import { Component, OnInit } from '@angular/core';



  


@Component({
  selector: 'app-requisition-edit',
  templateUrl: './requisition-edit.component.html',
  styleUrls: ['./requisition-edit.component.css']
})
export class RequisitionEditComponent implements OnInit {
  numbers = '1';
  title = 'Russia@gmail.com';
  myHero = 'india@gmail.com';
  date = '17-04-2020';
  newdate = '18-05-2020';
  pur = 'purchase';
  desc = 'newpurchase';
  num = '1';
  name = 'item1';
  qty = 50;
  cost = 2500;
  total = 4508;

  status = 'on';
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
