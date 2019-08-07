import { Component, OnInit, OnDestroy } from '@angular/core';
import { SplitwiseService } from '../splitwise.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-member',
  templateUrl: './group-member.component.html',
  styleUrls: ['./group-member.component.css']
})
export class GroupMemberComponent implements OnInit, OnDestroy {
  members = []
  data = {
    status: 'paid'
  }
  status = "";

  constructor(private member: SplitwiseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getMember();
  }
  getMember() {
    this.member.getMember(localStorage.getItem('splitexpense_id')).subscribe(res => {
      if (res) {
        this.members = res;
        for (let member of this.members) {
          if (member["u_id"] == localStorage.getItem('user_id')) {
            this.status = member["status"];
          }
        }
      }
    }, err => {
      alert(err.error.message);
    })
  }

  sattleup(id) {
    console.log(this.data)
    console.log(localStorage.getItem('user_id'))
    // this.member.sattleup(id,this.data).subscribe(res=>{
    //   if(res){
    //     alert(res.msg);
    //     this.getMember();
    //   }
    // },err=>{
    //     alert(err.error);
    // })

  }

  ngOnDestroy() {
    localStorage.removeItem('splitexpense_id');
  }
}
