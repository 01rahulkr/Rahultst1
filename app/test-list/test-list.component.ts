import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../test';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  tests: Observable<Test[]>;
  constructor(private testService: TestService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.tests = this.testService.getAllTest();
  }

  deleteTest(testId: number) {
    this.testService.deleteTest(testId).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));

  }

  updateTest(testId: number) {
    this.router.navigate(['update', testId])
  }

  getTestById(testId: number) {
    this.router.navigate(['details', testId])
  }

}
