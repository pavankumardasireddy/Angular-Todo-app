import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }
  // Get Todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle complete Todo
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
