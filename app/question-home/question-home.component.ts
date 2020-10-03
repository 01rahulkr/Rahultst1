import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test';
import { Question } from '../Question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-home',
  templateUrl: './question-home.component.html',
  styleUrls: ['./question-home.component.css']
})
export class QuestionHomeComponent implements OnInit {
  testId: number;
  test: Test = new Test();
  submitted = false;
  question: Question = new Question();

  constructor(private route: ActivatedRoute, private router: Router,
    private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.addQuestion(this.testId);
  }

  addQuestion(testId: number) {
    this.router.navigate(['add/:testId', testId])
  }

}
