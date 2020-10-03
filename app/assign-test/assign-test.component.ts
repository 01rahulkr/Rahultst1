import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';
import { TestService } from '../test.service';
import { Test } from '../test';
import { error } from 'protractor';

@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {
  user: User
  public email: string;
  testId: number;
  message;
  public errorMsg;
  test: Test;

  constructor(private route: ActivatedRoute, private service: UserService, private router: Router
    ) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    this.user = new User();
    this.service.getUserByEmail(this.email).subscribe
      (data => this.user = data, error => { this.errorMsg = error });

  }

  assignTest(email, testId) {
    this.service.assignTest(this.email, this.testId).subscribe(
      data => {this.message = data}, error => { this.errorMsg = error });
    
    this.goToList();
   
  }

  goToList() {
    
      this.router.navigate(['viewUsers']);}
  

}
