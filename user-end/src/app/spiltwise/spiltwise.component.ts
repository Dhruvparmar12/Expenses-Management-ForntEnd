import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplitwiseService } from './splitwise.service';

@Component({
  selector: 'app-spiltwise',
  templateUrl: './spiltwise.component.html',
  styleUrls: ['./spiltwise.component.css']
})
export class SpiltwiseComponent implements OnInit {
  groups = [];
  Expenses=[];
  constructor(private route: Router, private split: SplitwiseService) { }

  ngOnInit() {
    this.split.getMyGroups().subscribe(res => {
      if (res) {
        this.groups = res.result;
      }
    });
    this.split.getMySplitExpenses().subscribe(res=>{
      if(res.length>0){
        this.Expenses=res;
        
      }
      else{
        
      }
    },err=>{
      alert(err.error.msg);
    })

  }
  createGroup() {
    this.route.navigate(['/addgroup']);
  }

  selectGroup(id) {   
    localStorage.setItem('g_id', id);
    this.route.navigate(['/addsplitwise']);
  }

  selectMember(id){
    localStorage.setItem('splitexpense_id',id);
    this.route.navigate(['/groupmember'])
  }
}
