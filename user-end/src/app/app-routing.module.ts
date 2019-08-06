import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthguradService} from './authgurad.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { GroupAddComponent } from './group/group-add/group-add.component';
import { GroupEditComponent } from './group/group-edit/group-edit.component';
import { ExpensesEditComponent } from './expenses/expenses-edit/expenses-edit.component';
import { ExpensesAddComponent } from './expenses/expenses-add/expenses-add.component';
import { SpiltwiseComponent } from './spiltwise/spiltwise.component';
import { MemberComponent } from './member/member.component';
import { AddSplitComponent } from './spiltwise/add-split/add-split.component';
import { GroupMemberComponent } from './spiltwise/group-member/group-member.component';

const routes: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'passwordreset',component:ChangePasswordComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthguradService]},
  {path:'profile',component:ProfileComponent,canActivate: [AuthguradService]},
  {path:'profile/:id',component:ProfileEditComponent,canActivate: [AuthguradService]},
  {path:'group',component:GroupComponent,canActivate: [AuthguradService]},
  {path:'addgroup',component:GroupAddComponent,canActivate: [AuthguradService]},
  {path:'editgroup',component:GroupEditComponent,canActivate: [AuthguradService]},
  {path:'expenses',component:ExpensesComponent,canActivate: [AuthguradService]},
  {path:'addexpenses',component:ExpensesAddComponent,canActivate: [AuthguradService]},
  {path:'editexpenses/:id',component:ExpensesEditComponent,canActivate: [AuthguradService]},
  {path:'splitwise',component:SpiltwiseComponent,canActivate: [AuthguradService]},
  {path:'addsplitwise',component:AddSplitComponent,canActivate: [AuthguradService]},
  {path:'addmember',component:MemberComponent,canActivate: [AuthguradService]},
  {path:'groupmember',component:GroupMemberComponent,canActivate: [AuthguradService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
