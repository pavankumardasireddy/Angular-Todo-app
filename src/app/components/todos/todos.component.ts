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
    this.todos = this.service.getTodos();
  }

}
