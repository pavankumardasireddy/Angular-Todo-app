import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  dateVal: Date = new Date();
  jsonVal: object = { fName: 'pavan', lName: 'kumar' };
  constructor() { }

  ngOnInit(): void {
  }

}
