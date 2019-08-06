import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  userName:string;
  constructor(private auth:AuthenticationService, private route:Router) { 
    this.userName=localStorage.getItem('u_name')
  }

  ngOnInit() {
   
    
     
  }

}
