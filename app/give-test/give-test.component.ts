import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { Test } from '../test';

@Component({
  selector: 'app-give-test',
  templateUrl: './give-test.component.html',
  styleUrls: ['./give-test.component.css']
})
export class GiveTestComponent implements OnInit {

  constructor(private route: ActivatedRoute, private testService: TestService,
    private router: Router) { }
  test: Test;
  testId: number;
  seconds: number;
  qProgress: number;
  timer;
  result;
  id;
  hurry;
  visible = true;
  show = false;

  ngOnInit(): void {

    this.test = new Test();
    this.seconds = 0;
    this.qProgress = 0;
    this.startTimer();
    this.testId = this.route.snapshot.params['testId'];
    this.testService.getTestById(this.testId).
      subscribe(data => {
        this.test = data;
      });

  }

  giveTest() {
    this.testService.giveTest(this.test)
      .subscribe(data => this.result = data, data => console.log(data));


    this.test = new Test();

  }

  startTimer() {

    this.timer = setInterval(() => {

      this.seconds++;
    }, 1000);


  }

  Answer(choice) {

    this.test.testQuestions[this.qProgress].chosenAnswer = choice;


  }
  next() {
    this.id = this.qProgress;
    if (this.test.testQuestions[this.id = this.id + 1] != null) { this.qProgress++; }

  }
  previous() {
    this.id = this.qProgress;
    if (this.test.testQuestions[this.id = this.id - 1] != null) { this.qProgress--; }

  }


  displayTimeElapsed() {

    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60)
  }

  autoSubmit() {
    if (this.seconds == (this.test.testDuration * 60) - 60) {
      this.hurry = "Only 1 Minute Left";
    }
    if (this.seconds == this.test.testDuration * 60) {
      return this.onSubmit();
    }
  }
  onSubmit() {
    this.visible = false;
    this.show = true;
    this.giveTest();
  }
}
