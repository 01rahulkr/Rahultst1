import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-details-home',
  templateUrl: './test-details-home.component.html',
  styleUrls: ['./test-details-home.component.css']
})
export class TestDetailsHomeComponent implements OnInit {
  testId: number;
  test: Test = new Test();
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
    private testService: TestService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
    this.getTestById(this.testId)
  }

  getTestById(testId: number) {
    this.router.navigate(['details/:testId', testId])
  }


}
