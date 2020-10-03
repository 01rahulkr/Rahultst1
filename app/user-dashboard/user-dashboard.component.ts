import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: User;
  email;
  id;
  constructor(private route: ActivatedRoute, private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.email = this.route.snapshot.params['email'];
    this.userService.getUserByEmail(this.email).
      subscribe(data => this.user = data);
    this.id = this.user.testId;
  }

  giveTest() {
    this.router.navigate(['/giveTest', this.user.testId])
  }
}
