import { Component } from '@angular/core';
import {CurrentListComponent} from './current-list.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [CurrentListComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: any;
  constructor(){
    this.title = "Angular 2";
  }
}
