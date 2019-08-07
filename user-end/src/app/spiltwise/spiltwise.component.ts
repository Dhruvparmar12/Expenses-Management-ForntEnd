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
  Expenses = [];
  lant;
  borrow;
  constructor(private route: Router, private split: SplitwiseService) {
    this.getAmount()
  }

  ngOnInit() {
    this.getAmount()
    this.split.getMyGroups().subscribe(res => {
      if (res) {
        this.groups = res.result;
      }
    });
    this.split.getMySplitExpenses().subscribe(res => {
      if (res.length > 0) {
        this.Expenses = res;
      }
      else {

      }
    }, err => {
      alert(err.error.msg);
    })

  }
  //Land / Borrow Status;
  getAmount() {
    this.split.getStatus().subscribe(res => {
      if (res) {
        this.lant = res['Lant'][0]['Lant'];
        this.borrow = res['Borrow'][0]['Borrow']
        if(this.lant==null){
          this.lant=0
        }
        if(this.borrow==null){
          this.borrow=0
        }
      }
    }, err => {
      alert(err)
    })
  }

  createGroup() {
    this.route.navigate(['/addgroup']);
  }

  selectGroup(id) {
    localStorage.setItem('g_id', id);
    this.route.navigate(['/addsplitwise']);
  }

  selectMember(id) {
    localStorage.setItem('splitexpense_id', id);
    this.route.navigate(['/groupmember'])
  }
}
