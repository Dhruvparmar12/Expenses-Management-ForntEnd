import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SplitwiseService } from '../splitwise.service';

@Component({
  selector: 'app-add-split',
  templateUrl: './add-split.component.html',
  styleUrls: ['./add-split.component.css']
})
export class AddSplitComponent implements OnInit {
  addExpensesForm: FormGroup;

  constructor(private exp: SplitwiseService, private route: Router) { }

  ngOnInit() {

    if (localStorage.getItem('g_id') == null) {
      this.route.navigate(['/splitwise']);
    }

    else {
      this.addExpensesForm = new FormGroup({
        e_name: new FormControl(null, [Validators.required]),
        e_amount: new FormControl(null, [Validators.required]),
        e_date: new FormControl(null, [Validators.required]),
        u_id: new FormControl(localStorage.getItem('user_id')),
        g_id: new FormControl(localStorage.getItem('g_id'))
      })
    }
  }

  addExpenses() {

    this.exp.addExpnses(this.addExpensesForm.value).subscribe(res => {
      if (res) {
        alert(res.msg);
        localStorage.removeItem('g_id');
        this.route.navigate(['/'])
      }
    }, err => {
      alert(err.error.msg);
    })
  }



}
