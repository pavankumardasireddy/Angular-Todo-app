import { Component} from '@angular/core';

@Component({
  selector: 'app-aync-pipes',
  templateUrl: './aync-pipes.component.html',
  styleUrls: ['./aync-pipes.component.css']
})
export class AyncPipesComponent {
  promiseData: any;
  constructor() {
    this.getPromise().then(v => this.promiseData = v);
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise Completed!'), 3000);
    });
  }
}
