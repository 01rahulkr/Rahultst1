import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) { }

  getQuestion(id: number): Observable<any> {
   
    return this.http.get(`${this.baseUrl}/getQuestion/${id}`).
    pipe(catchError(this.handleError));
  }
   

  private handleError(error: HttpErrorResponse){
    // if(error.error instanceof ErrorEvent){
    //   console.error('Client Side Error: ',error.error.message);
    // } 
    // else{
    //   console.error('Server Side Error: ',error.error.message);
    // }
     return throwError(error.error.message || "Server Error");
   
  }

  updateQuestion(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateQuestion/${id}`, value).
    pipe(catchError(this.handleError));
  }
  
  addQuestion(testId: number ,value: any): Observable<Object>{
    return this.http.post(`${this.baseUrl}/addQuestion/${testId}`, value).
    pipe(catchError(this.handleError));
  }

  viewQuestionList():Observable<any>{
    return this.http.get(`${this.baseUrl}/viewQuestions`).
    pipe(catchError(this.handleError));
  }
  deleteQuestion(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteQuestion/${id}`,{responseType: 'text'}).
    pipe(catchError(this.handleError));
  }
 
}

