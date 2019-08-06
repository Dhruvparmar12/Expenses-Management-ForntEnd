import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from './member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members=[];
  
  constructor(private route:Router, private member:MemberService) { }

  ngOnInit() {
    this.member.getMember().subscribe(res=>{
      if(res){
        this.members=res.msg;
       
      }
    },err=>{
      if(err){
        alert(err.error.msg);
      }
    })
  }

  addMember(id){
   const data={
      g_id:localStorage.getItem('g_id'),
      u_id:id
    }
    
    this.member.addMember(data).subscribe(res=>{
      if(res){
        alert(res.msg);
      }
    },err=>{
      if(err){
        alert(err.error.msg);
      }
    })
  }

  onAdd(){
    this.route.navigate(['/addsplitwise']);
  }

}
