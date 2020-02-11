import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CourseService } from './course.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosService } from './services/todos.service';
import { HeaderComponent } from './components/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    CourseService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
