import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { Test } from '../test';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-home',
  templateUrl: './update-home.component.html',
  styleUrls: ['./update-home.component.css']
})
export class UpdateHomeComponent implements OnInit {
  testId: number;
  test: Test = new Test();
  submitted = false;


  constructor(private route: ActivatedRoute, private router: Router,
    private testService: TestService) { }

  ngOnInit(): void {

  }



  onSubmit() {
    this.submitted = true;
    this.updateTest(this.testId);
  }

  updateTest(testId: number) {
    this.router.navigate(['update/:testId', testId])
  }

}
