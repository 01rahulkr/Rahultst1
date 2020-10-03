import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { Answer } from '../Answer';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  test: Test;
  question: Question;
  public errorMsg;
  testId: number;
  answer1: Answer = new Answer();
  answer2: Answer = new Answer();
  answer3: Answer = new Answer();
  answer4: Answer = new Answer();
  answer: Answer[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private questionService: QuestionService, private testService: TestService) { }

  ngOnInit(): void {
    this.question = new Question();
    this.testId = this.route.snapshot.params['testId'];
    this.testService.getTestById(this.testId).subscribe(data => {
      console.log(data)
      this.test = data;
    }, error => { this.errorMsg = error });
  }
  save() {
    this.answer.push(this.answer1);
    this.answer.push(this.answer2);
    this.answer.push(this.answer3);
    this.answer.push(this.answer4);
    this.question.questionOptions = this.answer;

    this.questionService.addQuestion(this.testId, this.question)
      .subscribe(data => console.log(data), error => console.log(error));
    this.question = new Question();
    this.gotoList();
  }

  onSubmit() {

    this.save();
  }

  gotoList() {
    this.router.navigate(['questionList']);
  }

}
