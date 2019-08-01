import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthguradService} from './authgurad.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'passwordreset',component:ChangePasswordComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthguradService]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
