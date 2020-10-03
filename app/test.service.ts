import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = 'http://localhost:8088'

  constructor(private http: HttpClient) { }

  getTestById(testId: number): Observable<any> {
    return this.http.get(`http://localhost:8088/viewTestById/${testId}`).
    pipe(catchError(this.handleError));
  }
  
  addTest(test: Object): Observable<Object> {
    return this.http.post(`http://localhost:8088/addTest`, test).
    pipe(catchError(this.handleError));
  }

  updateTest(testId: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8088/updateTest/${testId}`, value).
    pipe(catchError(this.handleError));
    
  }
  giveTest(value : any): Observable<Object>{
    return this.http.post(`${this.baseUrl}/getResult`,value);
  }

  
  

 

  deleteTest(testId: number): Observable<any> {
    return this.http.delete(`http://localhost:8088/deleteTest/${testId}`, { responseType: 'text' }).
    pipe(catchError(this.handleError));
  }

  getAllTest(): Observable<any> {
    return this.http.get(`http://localhost:8088/viewTests`).
    pipe(catchError(this.handleError));

  }
  private handleError(error: HttpErrorResponse){
     return throwError(error.error || "Server Error");
   
  }

}