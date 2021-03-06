// app/friend.component.ts
import { Component } from '@angular/core'; 
import {FriendService} from './friend.service';

@Component({
    selector: 'my-friends',
    providers: [FriendService],
     styles: [`
          div { 
      background-color:#EFEFEF;
      margin-bottom:15px;
      padding:15px;
      border:1px solid #DDD;
      box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
     border-radius:3px;
   }
   h2 { 
     text-align: center;
   }
     `],
     template: `
         <div *ngFor="let f of friends">
         <h4> Name : {{f.name}} </h4> <h4>Age: {{f.age}}</h4> 
         </div>
     `
})
export class FriendComponent {
    componentName: 'FriendComponent';
    friends: any;
    // Inject FriendService and assign it to _friendService
    constructor(_friendService: FriendService) {
        // Utilize .get request from app/friend.service.ts to populate friends object
        this.friends = _friendService.getFriends();
    }
}