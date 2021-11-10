import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent implements OnInit {
   width:number  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
isMobileWidth:boolean;
isNewWidth = 'true';

  step = 0;

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
    console.log(this.width)
    if (this.width>750) {
      this.isMobileWidth = true;
    

    }

    else if(this.width<750){
      this.isMobileWidth = false;
    }

      
    
  }


  
  


}
