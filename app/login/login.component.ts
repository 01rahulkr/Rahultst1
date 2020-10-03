import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  message: any;
  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }

  OnSubmit() {

    this.service.login(this.user).subscribe(
      (data: any) => {
        localStorage.clear();
        localStorage.setItem('auth', JSON.stringify(data));
        console.log(data);
        console.log(localStorage.getItem('auth'))
        if (localStorage.getItem('auth') === '"Admin"') {
          this.router.navigate(['/addTest']);
        }
        else if (localStorage.getItem('auth') === '"User"') {
          this.router.navigate(['/userDashboard', this.user.email]);
        }
        else if (localStorage.getItem('auth') === '"Incorrect Password"' || localStorage.getItem('auth') === '"The User is Not Present"') {
          alert(localStorage.getItem('auth'))
        }

      }
    )


  }
  isUserAdmin() {


    if (localStorage.getItem('auth') === '"Admin"') {
      return true;
    }
    else if (localStorage.getItem('auth') === '"User"') {
      return false;
    }
  }

}
