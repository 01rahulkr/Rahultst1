import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  question: Question[] = [];
  constructor(private route: ActivatedRoute, private router: Router,
    private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.viewQuestionList().
      subscribe(data => this.question = data, data => console.log(data));
  }


  updateQuestion(question) {
    this.router.navigate(['/updateQuestion', question.questionId])
  }
  deleteQuestion(question) {
    this.questionService.deleteQuestion(question.questionId).
      subscribe(data => console.log(data));
    this.router.navigate(['questionList'])


  }
}
