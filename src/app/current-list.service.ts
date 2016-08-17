
import { Injectable } from '@angular/core';

@Injectable()

export class CurrentListService {

    items: Array<any>;

    constructor() {
        this.items = [
            { id: 1, item: 'Peas' },
            { id: 2, item: 'Turkey' },
            { id: 3, item: 'Lettuce' }
        ];
    }

    getItems() {
        return this.items;
    }
}