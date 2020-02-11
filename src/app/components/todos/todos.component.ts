import { TodosService } from './../../services/todos.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private service: TodosService) { }

  ngOnInit(): void {
   this.service.getTodos().subscribe(todos => {
     this.todos = todos;
   });
  }

  deleteToDo(todo) {
    // Delete Todo from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Delete Todo from Server
    this.service.deleteTodo(todo).subscribe();
  }

}
