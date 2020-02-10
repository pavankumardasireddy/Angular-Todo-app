import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  list;
  orgName = 'AGS';
  constructor(service: CourseService) {
    this.list = service.getList();
   }

  ngOnInit(): void {
  }

}
