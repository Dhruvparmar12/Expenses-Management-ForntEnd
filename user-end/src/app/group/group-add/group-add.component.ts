import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupService } from '../group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {
  addnewGroup: FormGroup;

  constructor(private group: GroupService, private route: Router) { }

  ngOnInit() {
    this.addnewGroup = new FormGroup({
      g_name: new FormControl(null, [Validators.required])
    })
  }

  addGroup() {
    this.group.addGroup(this.addnewGroup.value).subscribe(res => {
      if (res) {
        localStorage.setItem('g_id', res['id']['insertId'])
        const data = {
          u_id: localStorage.getItem('user_id'),
          g_id: res['id']['insertId']
        }

        this.group.addMember(data).subscribe(res => {
          if (res) {
            alert('You are Admin.!');
            this.route.navigate(['/addmember']);
          }
        }, err => {
          alert(err.error.msg);
        });


      }
    }, err => {
      alert(err.error.msg);
    })

  }
}
