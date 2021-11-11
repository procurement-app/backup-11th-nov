import { Component, OnInit,ElementRef,Input, Directive } from '@angular/core';



interface Country {

  queryemail: string;
  responseemail: string;
  status: string;
  startdate: string;
  enddate: string;
}

const COUNTRIES: Country[] = [
  {
    
    queryemail: 'anandvijay@gmail.com',
    responseemail: 'anandvijay@gmail.com',
    status:'active',
    startdate: '20-12-2021',
    enddate: '22-12-2021'
  },
  
];




@Component({
  selector: 'app-newrequisition',
  templateUrl: './newrequisition.component.html',
  styleUrls: ['./newrequisition.component.css'],

})




export class NewrequisitionComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {

  }

  countries = COUNTRIES;

}
