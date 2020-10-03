import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  userModel: User = new User();
  message: any
  public errorMsg  


  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
  }
  public registerNow() {
    let resp = this.service.doRegistration(this.userModel);
    resp.subscribe((data: any) => {
      this.message = data
    },error => { this.errorMsg = error });
  }
}
