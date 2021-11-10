import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ToastService } from '../toast/toast-global/toast-service'
@Component({
  selector: 'app-supplier-management',
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.css']
})
export class SupplierManagementComponent implements OnInit {
  width:number  = window.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth;
  isMobileWidth:boolean;
  isNewWidth = 'true';
  toppings = new FormControl();
  cats = new FormControl();
  toppingList: string[] = ['India', 'Uae', 'Iran', 'Afghanistan'];
  catList: string[] = ['Normal', 'VIP'];
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

  getStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
    
    if (this.width>750) {
      this.isMobileWidth = true;
    

    }

    else if(this.width<750){
      this.isMobileWidth = false;
    }
  }

  doublyFn(){
    document.getElementById("doubly").style.display = "block";
  }


  productFn(){
    var itm = document.getElementById("product-vendor").lastChild;
    var cln = itm.cloneNode(true);
    document.getElementById("product-name").appendChild(cln);
  }

  uploadFn(){
 /*   var html = document.getElementById('upload-new').innerHTML;
    var clone = document.createElement('div');
    clone.innerHTML = html;
    document.getElementById('upload-old').appendChild(clone);
    */
  }

  deleteFn(){
    document.getElementById("upload-new").style.display = "none";
    alert("hello");
  }


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

 


  referenceFn(){
    
  }

  
  listFn(){
  /*  var html = document.getElementById('test').innerHTML;
    var clone = document.createElement('div');
    clone.innerHTML = html;
    document.getElementById('clones').appendChild(clone); */
    var itm = document.getElementById("clones").lastChild;
    var cln = itm.cloneNode(true);
    document.getElementById("test").appendChild(cln);

  }
}  
  




