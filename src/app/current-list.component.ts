import { Component} from '@angular/core';
import {CurrentListService} from './current-list.service';


@Component({
    selector: 'current-list',
    providers: [CurrentListService],
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
        <h2> Current Shopping List </h2>
         <div *ngFor="let f of items">
         <h4> ID : {{f.id}} </h4> <h4>Item: {{f.item}}</h4> 
         </div>
     `
})



export class CurrentListComponent {

    componentName: 'CurrentList';
    items: any;
    constructor(_currentListService: CurrentListService){
        this.items = _currentListService.getItems();
    }

} 
