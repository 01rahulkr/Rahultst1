import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-update-user-home',
  templateUrl: './update-user-home.component.html',
  styleUrls: ['./update-user-home.component.css']
})
export class UpdateUserHomeComponent implements OnInit {
  
  user:User=new User();

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    this.updateUser(this.user.email);
  }

  updateUser(email){
    this.router.navigate(['updateuser',email])
  }
  Signout(){
    localStorage.clear();
    this.router.navigate(['/addUser']);
  }
  
}
