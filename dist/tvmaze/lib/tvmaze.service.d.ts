import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './tvmaze.models';
import * as i0 from "@angular/core";
export declare class TvmazeService {
    private http;
    private readonly apiRoot;
    constructor(http: HttpClient);
    getShow(id: number): Observable<Show>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TvmazeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TvmazeService>;
}
