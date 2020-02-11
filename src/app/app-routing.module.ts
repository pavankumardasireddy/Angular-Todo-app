import { AboutComponent } from './components/pages/about/about.component';
import { CoursesComponent } from './courses.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'skills', component: CoursesComponent},
  { path: 'me', component: CourseComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
