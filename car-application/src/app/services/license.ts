import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class MinubaService extends ApiService {

    constructor(
        protected http: HttpClient,
    ) {
        super(http);
    }

    get(minubaId: string): Observable<Application> {
        return this.http.get('https://app.minuba.dk/', {
            params: new HttpParams()
                .set('op', 'OrderDetailsPublic')
                .set('glist', minubaId)
        }).pipe(
            catchError(this.handleError())
        )
    }
}
