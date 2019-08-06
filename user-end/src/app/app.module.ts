import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GroupComponent } from './group/group.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesEditComponent } from './expenses/expenses-edit/expenses-edit.component';
import { ExpensesAddComponent } from './expenses/expenses-add/expenses-add.component';
import { GroupAddComponent } from './group/group-add/group-add.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { GroupEditComponent } from './group/group-edit/group-edit.component';
import { SpiltwiseComponent } from './spiltwise/spiltwise.component';
import { MemberComponent } from './member/member.component';
import { AddSplitComponent } from './spiltwise/add-split/add-split.component';
import { GroupMemberComponent } from './spiltwise/group-member/group-member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    HomeComponent,
    HeaderComponent,
    GroupComponent,
    ProfileComponent,
    ExpensesComponent,
    ExpensesEditComponent,
    ExpensesAddComponent,
    GroupAddComponent,
    ProfileEditComponent,
    GroupEditComponent,
    SpiltwiseComponent,
    MemberComponent,
    AddSplitComponent,
    GroupMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
