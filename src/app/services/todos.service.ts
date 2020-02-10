import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
  getTodos() {
    return [
      {
        id: 1,
        title: 'Eat',
        isCompleted: true,
      },
      {
        id: 2,
        title: 'Sleep',
        isCompleted: false,
      },
      {
        id: 3,
        title: 'Learn',
        isCompleted: true,
      },
      {
        id: 4,
        title: 'Code',
        isCompleted: true,
      },
    ];
  }
}
