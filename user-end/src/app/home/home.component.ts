import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../assets/css/form.css']
})
export class HomeComponent implements OnInit {
  userName:string;
  constructor() { 
    this.userName=localStorage.getItem('u_name')
  }

  ngOnInit() {    
     
   }

}
