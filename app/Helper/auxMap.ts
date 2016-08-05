import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuxMapService {
    private hideTab;
    public hideTabSubject: Subject<any>;
    constructor() {
        this.hideTabSubject = new Subject();
     }

}