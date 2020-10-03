import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users: Observable<User[]>;
  testId: number;

  assignedDone;
  
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {

    this.users = this.service.viewAllUsers();

  }


  assignTest(email) {
    this.router.navigate(['/assignTest', email])
  }

}
