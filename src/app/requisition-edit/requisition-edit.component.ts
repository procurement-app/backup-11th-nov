import { Component, OnInit } from '@angular/core';



  


@Component({
  selector: 'app-requisition-edit',
  templateUrl: './requisition-edit.component.html',
  styleUrls: ['./requisition-edit.component.css']
})
export class RequisitionEditComponent implements OnInit {
  width:number  = window.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth;
  isMobileWidth:boolean;
  isNewWidth = 'true';
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
  slope = 0;

  setStep(index: number) {
    this.step = index;
  }

 

  nextStep() {
    this.step++;
    if (this.width<750) {
      this.isMobileWidth = true;
    

    }
  }

  prevStep() {
    this.step--;
  }


 

  constructor() { }


  myFunction(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


  mynewFunction(){
    var x = document.getElementById("snack");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  ngOnInit(): void {
    
    if (this.width>750) {
      this.isMobileWidth = true;
    

    }

    else if(this.width<750){
      this.isMobileWidth = false;
    }
  }

}
