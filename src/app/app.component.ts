import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'angular-crashy';
  title = 'Angular Crash Course';
  date = new Date();
  name = 'Anubhab Here';

  constructor() {
    console.log('Constructor called');
    this.doSomething('anubhab');
  }

  doSomething(val: string): void {
    val = 'Do Something is working';
  }
}
