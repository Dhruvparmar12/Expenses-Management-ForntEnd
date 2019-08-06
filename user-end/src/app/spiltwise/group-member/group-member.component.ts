import { Component, OnInit, OnDestroy } from '@angular/core';
import { SplitwiseService } from '../splitwise.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-member',
  templateUrl: './group-member.component.html',
  styleUrls: ['./group-member.component.css']
})
export class GroupMemberComponent implements OnInit, OnDestroy {
  members=[]
  data={
    status:'paid'
  }
  temp=false
  constructor(private member:SplitwiseService, private route:ActivatedRoute) {
    
   }

  ngOnInit() {
  this.getMember(); 
  }
  getMember(){
    this.member.getMember(localStorage.getItem('splitexpense_id')).subscribe(res=>{
      if(res){
        this.members=res;  
        console.log(this.members)     
      }
    },err=>{
      alert(err.error.message);
    })  
  }

  sattleup(id){
    console.log(this.data)
    this.member.sattleup(id,this.data).subscribe(res=>{
      if(res){
        alert(res.msg);
        this.getMember();
      }
    },err=>{
        alert(err.error);
    })

  }

  ngOnDestroy(){
    localStorage.removeItem('splitexpense_id');
  }
}
