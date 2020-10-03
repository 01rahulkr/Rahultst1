import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Signout() {
    localStorage.clear();
    this.router.navigate(['']);

  }
  isUserAdmin() {
    if (localStorage.getItem('auth') === '"Admin"') {
      return true;
    }
    else if (localStorage.getItem('auth') === '"User"') {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = localStorage.getItem('auth')
    if (!(user === null)) {
      return true;
    }
    else {
      return false;
    }
  }

}
