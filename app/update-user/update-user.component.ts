import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userDetails: User = new User();
  email: any;
  message: any;
  errorMsg:any;
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) { }

  ngOnInit(): void {

    this.email = this.route.snapshot.params['email'];

    this.service.getUserByEmail(this.email).subscribe(data => {

      this.userDetails = data;
    }, error => { this.errorMsg = error ,JSON.stringify(this.errorMsg)});

  }

  public updateUserNow() {
    let resp = this.service.updateUser(this.email, this.userDetails);
    resp.subscribe((data: any) => {
      this.message = data
    }, error => { this.errorMsg = error,JSON.stringify(this.errorMsg)});
  }

  Signout() {
    localStorage.clear();
    this.router.navigate(['/addUser']);

  }

}
