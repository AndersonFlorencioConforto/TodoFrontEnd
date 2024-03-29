import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baserUrl = environment.baseUrl;
  baserUrl2 = environment.baseUrl2;
  baserUrl3 = environment.baseUrl3;
  baserUrl4 = environment.baseUrl4;

  constructor(private http: HttpClient, private snack : MatSnackBar) { }

  findAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baserUrl)
  }

  findById(id : any): Observable<Todo>{
    const url = `${this.baserUrl4}/${id}`
    return this.http.get<Todo>(url)
  }

  update(todo : Todo): Observable<Todo>{
    const url = `${this.baserUrl3}/${todo.id}`
    return this.http.put<Todo>(url,todo);
  }

  delete(id : any): Observable<void>{
    const url = `${this.baserUrl2}/${id}`
    return this.http.delete<void>(url);
  }

  create(todo:Todo): Observable<Todo>{
    return this.http.post<Todo>(this.baserUrl4, todo);
  }

  message(msg : String):void{
    this.snack.open(`${msg}`,'OK',{
      horizontalPosition :'end',
      verticalPosition : 'top',
      duration: 4000
    })
  }
}
