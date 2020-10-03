import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from "rxjs";

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public doRegistration(userModel) {
    return this.http.post('http://localhost:8088/addUser', userModel, { responseType: 'text' as 'json' }).
      pipe(catchError(this.handleError));
  }

  public updateUser(email: string, userDetails):Observable<any> {
    return this.http.put(`http://localhost:8088//updateUser/${email}`, userDetails, { responseType: 'text' as 'json' }).
    pipe(catchError(this.handleError));
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`http://localhost:8088/viewUser/${email}`).
    pipe(catchError(this.handleError));
  }

  viewAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8088/viewUsers').
    pipe(catchError(this.handleError));
  }
  assignTest(email: string, testId: number): Observable<any> {
    return this.http.post(`http://localhost:8088/assignTest/${email}/${testId}`, { responseType: 'text' as 'json' }).
    pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
   
    return throwError(error.error || "Server Error");

  }

}
