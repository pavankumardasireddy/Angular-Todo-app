import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  users: any[] = [
    {
      name: 'Pavan',
      age: 26,
      city: 'Vijayawada',
    },
    {
      name: 'Ramu',
      age: 18,
      city: 'Vizag',
    },
    {
      name: 'krishna',
      age: 16,
      city: 'Dwaraka',
    },
    {
      name: 'Somu',
      age: 31,
      city: 'Hyderabad',
    }
  ];

  ngOnInit(): void {
  }

  getPermit = (age: number) =>  age < 18 ? 'red' : 'green';
}
