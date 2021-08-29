import { Injectable } from '@angular/core';
import { Task } from "../Task";
import { TASKS } from "../mock-task";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl: string = "https://withdoc.herokuapp.com/api/v11/user/alldoctors";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
