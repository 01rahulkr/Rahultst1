import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  testId: number;
  test: Test;
  public errorMsg;

  constructor(private route: ActivatedRoute, private router: Router,
    private testService: TestService) { }

  ngOnInit() {
    this.test = new Test();
    this.testId = this.route.snapshot.params['testId'];

    this.testService.getTestById(this.testId).subscribe(data => {
      console.log(data)
      this.test = data;
    }, error => { this.errorMsg = error });

  }

  updateTest() {
    this.testService.updateTest(this.testId, this.test)
      .subscribe(data => console.log(data), error => { this.errorMsg = error });
    this.test = new Test();
    this.gotoList();
  }

  onSubmit() {
    this.updateTest();
  }

  gotoList() {
    this.router.navigate(['tests']);
  }

}
