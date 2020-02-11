import { TodosService } from './../../services/todos.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private service: TodosService) { }

  ngOnInit(): void {
  }

  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    // Toggle todo in UI
    todo.completed = !todo.completed;
    // Toggle todo in Server
    this.service.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
