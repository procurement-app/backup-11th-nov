import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {SharedService} from '../../shared.service';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	hamburgerClass: boolean =false;

	navClass: boolean = true;
	toggleChat: boolean = true;
	toggleSingle: boolean = true;
	screenHeight: number;
  screenWidth: number;
	constructor(private sharedService: SharedService) { }
	
	ngOnInit(): void {
	}
	
	
	
	togglechatbar() {
		this.toggleChat = !this.toggleChat;
	}
	singleChatWindow() {
		this.toggleSingle = !this.toggleSingle;
	}
	toggleHamburgerClass(){
		this.hamburgerClass = this.sharedService.toggleHamburgerClass();
	  }


	  toggleSidebarClass() {
		 this.navClass = !this.navClass  ;
	  }

	

}

