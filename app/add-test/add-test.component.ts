import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TestService } from '../test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  test: Test = new Test();
  submitted = false;
  public errorMsg;


  constructor(private testService: TestService,
    private router: Router) { }

  ngOnInit() {
  }
  
  newTest() {
    this.submitted = false;
    this.test = new Test();

  }

  save() {
    this.testService.addTest(this.test)
      .subscribe(data => console.log(data), 
      error => {this.errorMsg = error });
    this.test = new Test();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tests']);
  }

 

}
