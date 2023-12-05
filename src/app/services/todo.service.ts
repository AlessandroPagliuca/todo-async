import {Injectable} from '@angular/core';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.url+'/todos'); 
  }
  sendTodo(todo:Todo): Observable<Todo>{
    let body = todo;
    return this.http.post<Todo>(environment.url+'/todos',body);
  }
  updateTodo(todo:Todo):Observable<Todo>{
    let body = todo;
    let id = todo.id;
    return this.http.put<Todo>(environment.url+`/todos/${id}`,body);
  }
  removeTodo(todo:Todo):Observable<Todo>{
    return this.http.delete<Todo>(environment.url+`/todos/${todo.id}`);
  }
  getByIdTodo(id:number | string):Observable<Todo>{
    console.log('ID:', id);
    return this.http.get<Todo>(environment.url+`/detail/${id}`)
  }
}
