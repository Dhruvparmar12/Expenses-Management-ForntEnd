import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ExpensesService } from '../expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-add',
  templateUrl: './expenses-add.component.html',
  styleUrls: ['./expenses-add.component.css']
})
export class ExpensesAddComponent implements OnInit {
  addExpensesForm:FormGroup;

  constructor(private exp:ExpensesService,private route:Router) { }

  ngOnInit() {
    this.addExpensesForm= new FormGroup({
      e_name: new FormControl(null,[Validators.required]),
      e_amount:new FormControl(null,[Validators.required]),
      e_date:new FormControl(null,[Validators.required]),      
    })
 
  }

  addExpenses(){
    this.exp.addExpnses(this.addExpensesForm.value).subscribe(res=>{
      if(res){
        alert(res.msg);
        this.route.navigate(['/expenses']);
      }
    },err=>{
      if(err){
        alert(err.error.msg);
      }
    })
  }

}
