import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http'
import { TestService } from './test.service';
import { UpdateHomeComponent } from './update-home/update-home.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { AddTestComponent } from './add-test/add-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestDetailsHomeComponent } from './test-details-home/test-details-home.component';
import { TestListComponent } from './test-list/test-list.component';
import { RouterModule } from '@angular/router'

import { AuthGuard } from './auth/auth.guard';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { HomeComponent } from './home/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateUserHomeComponent } from './update-user-home/update-user-home.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { GiveTestComponent } from './give-test/give-test.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AssignTestComponent } from './assign-test/assign-test.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UpdateHomeComponent,
    UpdateTestComponent,
    AddTestComponent,
    TestListComponent,
    TestDetailsComponent,
    TestDetailsHomeComponent,
    NavbarHomeComponent,
    HomeComponent,
    UpdateUserComponent,
    UpdateUserHomeComponent,
    LoginComponent,
    routingComponents,
    GiveTestComponent,
    UserDashboardComponent,
    AssignTestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    UserService,
    TestService,
    AuthGuard,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
