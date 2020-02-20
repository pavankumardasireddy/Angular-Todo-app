import { PipesComponent } from './components/examples/pipes/pipes.component';
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
import { AboutComponent } from './components/pages/about/about.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { AyncPipesComponent } from './components/examples/pipes/aync-pipes/aync-pipes.component';
import { DefaultPipe } from './pipes/default.pipe';
import { FormComponent } from './components/Forms/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    ExamplesComponent,
    PipesComponent,
    AyncPipesComponent,
    DefaultPipe,
    FormComponent
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
