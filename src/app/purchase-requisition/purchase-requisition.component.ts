import { Component, OnInit,PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/*
interface Country {
  name:string
  RequestStartDate: string;
  RequestEndDate: string;
  Title: string;
  Description: string;
  EmailforQuery:string;
  EmailforResponse:string;
 Status:string;

}

const COUNTRIES: Country[] = [
  {
    name: 'anand',
    RequestStartDate: '12-10-2020',
  RequestEndDate: '13-10-2020',
  Title: 'Procurement',
  Description: 'new procurement',
  EmailforQuery:'anand@gmail.com',
  EmailforResponse:'anand@gmail.com',
 Status:'active'
  },
  {
    name: 'anand',
    RequestStartDate: '12-10-2020',
  RequestEndDate: '13-10-2020',
  Title: 'Procurement',
  Description: 'new procurement',
  EmailforQuery:'anand@gmail.com',
  EmailforResponse:'anand@gmail.com',
 Status:'active'
  },
  {
    name: 'anand',
    RequestStartDate: '12-10-2020',
    RequestEndDate: '13-10-2020',
    Title: 'Requisition',
    Description: 'new procurement',
    EmailforQuery:'anand@gmail.com',
    EmailforResponse:'anand@gmail.com',
   Status:'active'
  },
  /*
  {
    RequestStartDate: '12-10-2020',
  RequestEndDate: '13-10-2020',
  Title: 'Procurement',
  Description: 'new procurement',
  EmailforQuery:'anand@gmail.com',
  EmailforResponse:'anand@gmail.com',
 Status:'active'
  },
  {
    RequestStartDate: '12-10-2020',
  RequestEndDate: '13-10-2020',
  Title: 'Procurement',
  Description: 'new procurement',
  EmailforQuery:'anand@gmail.com',
  EmailforResponse:'anand@gmail.com',
 Status:'active'
  },
  {
    RequestStartDate: '12-10-2020',
  RequestEndDate: '13-10-2020',
  Title: 'Procurement',
  Description: 'new procurement',
  EmailforQuery:'anand@gmail.com',
  EmailforResponse:'anand@gmail.com',
 Status:'active'
  },
  {
    RequestStartDate: '12-10-2020',
  RequestEndDate: '13-10-2020',
  Title: 'Procurement',
  Description: 'new procurement',
  EmailforQuery:'anand@gmail.com',
  EmailforResponse:'anand@gmail.com',
 Status:'active'
  },
  {
    RequestStartDate: '12-10-2020',
  RequestEndDate: '13-10-2020',
  Title: 'Procurement',
  Description: 'new procurement',
  EmailforQuery:'anand@gmail.com',
  EmailforResponse:'anand@gmail.com',
 Status:'active'
  },
  {
    RequestStartDate: '12-10-2020',
  RequestEndDate: '13-10-2020',
  Title: 'Procurement',
  Description: 'new procurement',
  EmailforQuery:'anand@gmail.com',
  EmailforResponse:'anand@gmail.com',
 Status:'active'
  },
  
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.Title.toLowerCase().includes(term)
        || pipe.transform(country.RequestStartDate).includes(term)
        || pipe.transform(country.RequestEndDate).includes(term)
        
  });
}
*/



interface Country {
  email: string;
  mail: string;
  start: string;
  end: string;
  title:string;
  desc:string;
  status:string;
}

const COUNTRIES: Country[] = [
  {
    email: 'Russia@gmail.com',
    mail: 'india@gmail.com',
    start: '17-04-2020',
    end: '18-05-2020',
    title: 'purchase',
  
  desc:'new purchase',
  status:'Active'
  },
  {
    email: 'Canada@gmail.com',
    mail: 'pak@gmail.com',
    start: '19-03-2023',
    end: '23-03-2024',
    title:'requisition',
  desc:'new requisition',
  status:'Inactive'
  },
  
  {
    email: 'United States@gmailcom',
    mail: 'usa@gmail.com',
    start: '23-7-2019',
    end: '24-8-2019',
    title:'orders',
  desc:'new orders',
  status:'Active'
  },
  {
    email: 'United States@gmailcom',
    mail: 'usa@gmail.com',
    start: '23-7-2019',
    end: '24-8-2019',
    title:'orders',
  desc:'new orders',
  status:'Active'
  },
  {
    email: 'United States@gmailcom',
    mail: 'usa@gmail.com',
    start: '23-7-2019',
    end: '24-8-2019',
    title:'orders',
  desc:'new orders',
  status:'Active'
  },
  {
    email: 'Russia@gmail.com',
    mail: 'india@gmail.com',
    start: '17-04-2020',
    end: '18-05-2020',
    title: 'purchase',
  
  desc:'new purchase',
  status:'Active'
  },
  {
    email: 'Canada@gmail.com',
    mail: 'pak@gmail.com',
    start: '19-03-2023',
    end: '23-03-2024',
    title:'requisition',
  desc:'new requisition',
  status:'Inactive'
  },
  {
    email: 'Canada@gmail.com',
    mail: 'pak@gmail.com',
    start: '19-03-2023',
    end: '23-03-2024',
    title:'requisition',
  desc:'new requisition',
  status:'Active'
  },
  {
    email: 'Canada@gmail.com',
    mail: 'pak@gmail.com',
    start: '19-03-2023',
    end: '23-03-2024',
    title:'requisition',
  desc:'new requisition',
  status:'Inactive'
  },
  {
    email: 'Canada@gmail.com',
    mail: 'pak@gmail.com',
    start: '19-03-2023',
    end: '23-03-2024',
    title:'requisition',
  desc:'new requisition',
  status:'Inactive'
  },
  
  
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.email.toLowerCase().includes(term)
    
    
     
  });
}




@Component({
  selector: 'app-purchase-requisition',
  templateUrl: './purchase-requisition.component.html',
  styleUrls: ['./purchase-requisition.component.css'],
  providers: [DecimalPipe]
})
export class PurchaseRequisitionComponent implements OnInit {
  countries$: Observable<Country[]>;
  filter = new FormControl('');
  constructor(pipe: DecimalPipe) { 
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
    
  }

  ngOnInit(): void {
  }
  

  ngOnDestroy(): void {
    document.body.setAttribute('data-theme-version', 'light');
    
  }

 


dropFna(){
  document.getElementById("content_1").style.display = "block"
  document.getElementById("content_2").style.display = "none"
  document.getElementById("content_3").style.display = "none"
}

dropFnb(){
  document.getElementById("content_2").style.display = "block"
  document.getElementById("content_1").style.display = "none"
  document.getElementById("content_3").style.display = "none"
}

dropFnc(){
  document.getElementById("content_3").style.display = "block"
  document.getElementById("content_2").style.display = "none"
  document.getElementById("content_1").style.display = "none"
}


reqFn(){
  
  document.getElementById("card-req").style.display = "block"
  
}

closeFn(){
  document.getElementById("invoce").style.display = "none";
  
}

hoverFn(){
  document.getElementById("invoce").style.display = "block"
 
}

page = 4;


}
