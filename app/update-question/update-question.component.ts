import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Answer } from '../Answer';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  id: number;
  question: Question;
  answer1: Answer = new Answer();
  answer2: Answer = new Answer();
  answer3: Answer = new Answer();

  answer4: Answer = new Answer();
  answer: Answer[] = [];
  public errorMsg;
  constructor(private route: ActivatedRoute, private router: Router,
    private questionService: QuestionService) { }

  ngOnInit() {


    this.question = new Question();

    this.id = this.route.snapshot.params['id'];

    this.questionService.getQuestion(this.id)
      .subscribe(data => {
        console.log(data)
        this.question = data;
      }, error => { this.errorMsg = error });
  }

  updateQuestion() {

    this.answer.push(this.answer1);
    this.answer.push(this.answer2);
    this.answer.push(this.answer3);
    this.answer.push(this.answer4);
    this.question.questionOptions = this.answer;
    this.questionService.updateQuestion(this.id, this.question)
      .subscribe(data => console.log(data), error => { this.errorMsg = error });
    this.question = new Question();
    this.gotoList();

  }

  onSubmit() {

    this.updateQuestion();

  }
  gotoList() {
    this.router.navigate(['questionList']);
  }



}

