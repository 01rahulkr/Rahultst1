import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  testId: number;
  test: Test;
  public errorMsg;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private testService: TestService) { }

  ngOnInit() {
    this.test = new Test();

    this.testId = this.route.snapshot.params['testId'];

    this.testService.getTestById(this.testId)
      .subscribe(data => {
        console.log(data)
        this.test = data;
        this.submitted = false;
      }, error => { this.errorMsg = error });

  }

  list() {
    this.router.navigate(['tests']);
  }
}
