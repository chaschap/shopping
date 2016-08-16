import { Component } from '@angular/core';
import {FriendComponent} from './friend.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [FriendComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  componentName: 'AppComponent';
}
