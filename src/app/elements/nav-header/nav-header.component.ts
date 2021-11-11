import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

    
  hamburgerClass: boolean =false;
  
  screenHeight: number;
  screenWidth: number;
  
    constructor(private sharedService: SharedService) { 
        this.getScreenSize();
    }

  ngOnInit(): void {
    document.body.setAttribute('data-sidebar-style', 'full');
    	this.hamburgerClass = this.sharedService.toggleHamburgerClass();

        this.themeSettings('data-nav-headerbg','color_3')
    
    
  } 
  

  
  toggleHamburgerClass(){
	this.hamburgerClass = this.sharedService.toggleHamburgerClass();
  }

  themeSettings(attributeName, attributeVal) {
    document.body.setAttribute('data-nav-headerbg','color_3');
    

    

}
  
  /*
   @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        const div =  document.getElementById('main-wrapper');
        if(this.screenWidth <768) {
            document.body.setAttribute('data-sidebar-style', 'overlay');
        } else if(this.screenWidth >=768 && this.screenWidth <=1023) {
            document.body.setAttribute('data-sidebar-style', 'mini');
        } else {
            document.body.setAttribute('data-sidebar-style', 'full');
        }
    }
    */




    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        const div =  document.getElementById('main-wrapper');
        if(this.screenWidth <768) {
            document.body.setAttribute('data-sidebar-style', 'full');
        }  else {
            document.body.setAttribute('data-sidebar-style', 'full');
        }
    }


 
}


