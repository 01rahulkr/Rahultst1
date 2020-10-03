import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AddTestComponent } from './add-test/add-test.component'
import { UpdateTestComponent } from './update-test/update-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestListComponent } from './test-list/test-list.component';

import { TestDetailsHomeComponent } from './test-details-home/test-details-home.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionHomeComponent } from './question-home/question-home.component';
import { GiveTestComponent } from './give-test/give-test.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewUsersComponent } from './view-users/view-users.component';
import { HomeComponent } from './home/home.component';
import { UpdateHomeComponent } from './update-home/update-home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateUserHomeComponent } from './update-user-home/update-user-home.component';
import { LoginComponent } from './login/login.component';
import { AssignTestComponent } from './assign-test/assign-test.component';




const routes: Routes = [
  { path: 'updateuser/:email', component: UpdateUserComponent, canActivate: [AuthGuard] },

  { path: "", component: HomeComponent },
  { path: "addUser", component: RegistrationComponent },
  { path: 'viewTestById/:testId', component: TestDetailsComponent, canActivate: [AuthGuard] },
  { path: 'updateUser', component: UpdateUserHomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'update/:testId', component: UpdateTestComponent, canActivate: [AuthGuard] },
  { path: 'details/:testId', component: TestDetailsComponent, canActivate: [AuthGuard] },
  { path: 'addTest', component: AddTestComponent, canActivate: [AuthGuard] },
  { path: 'viewTest', component: TestListComponent, canActivate: [AuthGuard] },
  { path: 'updateTest', component: UpdateHomeComponent, canActivate: [AuthGuard] },
  { path: 'assignTest/:email', component: AssignTestComponent, canActivate: [AuthGuard] },
  { path: 'tests', component: TestListComponent, canActivate: [AuthGuard] },
  { path: 'detailshome', component: TestDetailsHomeComponent, canActivate: [AuthGuard] },
  { path: 'addQuestion/:testId', component: AddQuestionComponent, canActivate: [AuthGuard] },
  { path: 'updateQuestion/:id', component: UpdateQuestionComponent, canActivate: [AuthGuard] },
  { path: 'questionList', component: QuestionListComponent, canActivate: [AuthGuard] },
  { path: 'questionhome', component: QuestionHomeComponent, canActivate: [AuthGuard] },
  { path: 'giveTest/:testId', component: GiveTestComponent, canActivate: [AuthGuard] },
  { path: 'userDashboard/:email', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'viewUsers', component: ViewUsersComponent, canActivate: [AuthGuard] },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UpdateTestComponent, TestDetailsComponent

  , UpdateQuestionComponent, AddTestComponent, HomeComponent, UpdateHomeComponent,
  TestListComponent, TestDetailsHomeComponent,
  AddQuestionComponent, QuestionHomeComponent,
  QuestionListComponent,
  GiveTestComponent,
  RegistrationComponent,
  ViewUsersComponent,
  UserDashboardComponent,
  UpdateUserHomeComponent,
  LoginComponent,
  AssignTestComponent,]
