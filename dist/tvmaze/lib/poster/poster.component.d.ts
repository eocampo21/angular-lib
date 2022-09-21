import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../tvmaze.models';
import { TvmazeService } from '../tvmaze.service';
import * as i0 from "@angular/core";
export declare class PosterComponent implements OnInit {
    private tvmaze;
    showId: number | null;
    left?: boolean;
    posterUrl$: Observable<Show> | undefined;
    constructor(tvmaze: TvmazeService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PosterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PosterComponent, "tm-poster", never, { "showId": "showId"; "left": "left"; }, {}, never, never, false>;
}
