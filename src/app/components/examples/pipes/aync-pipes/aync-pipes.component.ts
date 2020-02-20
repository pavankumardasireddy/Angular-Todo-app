import { Component} from '@angular/core';

@Component({
  selector: 'app-aync-pipes',
  templateUrl: './aync-pipes.component.html',
  styleUrls: ['./aync-pipes.component.css']
})
export class AyncPipesComponent {
  promise: Promise<any>;
  constructor() {
   this.promise = this.getPromise();
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise Completed!'), 3000);
    });
  }
}
