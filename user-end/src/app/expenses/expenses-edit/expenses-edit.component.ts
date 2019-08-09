import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpensesService } from '../../services/expenses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  styleUrls: ['./expenses-edit.component.css']
})
export class ExpensesEditComponent implements OnInit {
  editExpensesForm:FormGroup;
  id;
  constructor(private exp:ExpensesService,private route:Router, private routes:ActivatedRoute) { }

  ngOnInit() {
    this.editExpensesForm= new FormGroup({
      e_name: new FormControl(null,[Validators.required]),
      e_amount:new FormControl(null,[Validators.required]),
      e_date:new FormControl(null,[Validators.required]),  
    });
    this.routes.params.subscribe(id=>{
      this.id=id['id'];
      this.exp.findExpnses(id['id']).subscribe(
        expe=>{
          
          this.editExpensesForm.setValue({
            e_name:expe[0].e_name,
           e_amount:expe[0].e_amount,          
            e_date:expe[0].e_date.slice(0,10)
          })
        },
        err=>{
          console.log(err)
        }
      )
      });       
  }

  updateExpenses(){
    
    this.exp.updateExpenses(this.editExpensesForm.value,this.id).subscribe(res=>{
      if(res){
       alert(res.msg);
       this.route.navigate(['/expenses'])
      }
    },err=>{
      if(err){
        alert(err.error.msg)
      }
    })
  }
}
