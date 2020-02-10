import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                <h5>{{ course }}</h5>
            </li>
        </ul>
    `

})
export class CoursesComponent {
    title = 'List of Courses';
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

 }
