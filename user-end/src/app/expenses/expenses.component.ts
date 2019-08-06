import { Component, OnInit} from '@angular/core';
import { ExpensesService } from './expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expnses=[];
  constructor(private exp:ExpensesService, private route:Router) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses(){
    this.exp.getExpense().subscribe(res=>{
      if(res){
        this.expnses=res;
        
      }
    },err=>{
      alert(err.error.msg);
    })
  }

  onEdit(id:number){
    this.route.navigate([`/editexpenses/${id}`]);
  }

  onDelete(id:number){
    this.exp.deleteExpenses(id).subscribe(res=>{
      if(res){
        alert(res.msg);
        this.getExpenses();
      }
    },err=>{
      alert(err.error.msg);
    })
    
  }
  onAdd(){
    this.route.navigate(['/addexpenses']);
  }
}
