import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GlobalService {
    isBuyer: boolean = false;
    isSeller: boolean = false;

    constructor() 
    {}
}