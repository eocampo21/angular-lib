import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../tvmaze.service";
import * as i2 from "@angular/common";
export class PosterComponent {
    constructor(tvmaze) {
        this.tvmaze = tvmaze;
        this.showId = null;
        this.left = false;
    }
    ngOnInit() {
        console.log(this.showId);
        this.posterUrl$ = this.tvmaze
            .getShow(this.showId || 55)
            .pipe(map(show => show));
    }
}
PosterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: PosterComponent, deps: [{ token: i1.TvmazeService }], target: i0.ɵɵFactoryTarget.Component });
PosterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: PosterComponent, selector: "tm-poster", inputs: { showId: "showId", left: "left" }, ngImport: i0, template: `
    <div class="container poster">
      <ng-container *ngIf="left">
        <img class="poster__img left" *ngIf="posterUrl$ | async as poster" [src]="poster.image.medium" />
      </ng-container>
     
      <ul class="poster__description">
        <li class="poster__name" *ngIf="posterUrl$ | async as poster"><p>Movies Name: {{poster.name}}</p></li>
        <li class="poster__rating" *ngIf="posterUrl$ | async as poster" ><p>Rating: {{poster.rating.average}}</p></li>
        <li class="poster__summary" *ngIf="posterUrl$ | async as poster" [innerHTML]="poster.summary" ></li>
      </ul>
      <ng-container *ngIf="!left">
        <img class="poster__img right" *ngIf="posterUrl$ | async as poster" [src]="poster.image.medium" />
      </ng-container>
    </div>
  `, isInline: true, styles: [".poster{display:flex;margin:2vw;overflow:hidden}.poster__img.left{border-bottom-left-radius:30px;border-top-left-radius:30px}.poster__img.right{border-bottom-right-radius:30px;border-top-right-radius:30px}.poster__description{display:flex;flex-direction:column;justify-content:center;padding-inline-end:40px;border:1px solid #3f51b51c;margin-block-start:0;margin-block-end:0}ul li{list-style-type:none}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: PosterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tm-poster', template: `
    <div class="container poster">
      <ng-container *ngIf="left">
        <img class="poster__img left" *ngIf="posterUrl$ | async as poster" [src]="poster.image.medium" />
      </ng-container>
     
      <ul class="poster__description">
        <li class="poster__name" *ngIf="posterUrl$ | async as poster"><p>Movies Name: {{poster.name}}</p></li>
        <li class="poster__rating" *ngIf="posterUrl$ | async as poster" ><p>Rating: {{poster.rating.average}}</p></li>
        <li class="poster__summary" *ngIf="posterUrl$ | async as poster" [innerHTML]="poster.summary" ></li>
      </ul>
      <ng-container *ngIf="!left">
        <img class="poster__img right" *ngIf="posterUrl$ | async as poster" [src]="poster.image.medium" />
      </ng-container>
    </div>
  `, styles: [".poster{display:flex;margin:2vw;overflow:hidden}.poster__img.left{border-bottom-left-radius:30px;border-top-left-radius:30px}.poster__img.right{border-bottom-right-radius:30px;border-top-right-radius:30px}.poster__description{display:flex;flex-direction:column;justify-content:center;padding-inline-end:40px;border:1px solid #3f51b51c;margin-block-start:0;margin-block-end:0}ul li{list-style-type:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TvmazeService }]; }, propDecorators: { showId: [{
                type: Input
            }], left: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3R2bWF6ZS9zcmMvbGliL3Bvc3Rlci9wb3N0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQXdEckMsTUFBTSxPQUFRLGVBQWU7SUFLM0IsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUpoQyxXQUFNLEdBQWtCLElBQUksQ0FBQztRQUM3QixTQUFJLEdBQWEsS0FBSyxDQUFDO0lBSWhDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTthQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7NEdBYlcsZUFBZTtnR0FBZixlQUFlLDZGQWxEakI7Ozs7Ozs7Ozs7Ozs7OztHQWVUOzJGQW1DVyxlQUFlO2tCQXBENUIsU0FBUzsrQkFDRSxXQUFXLFlBQ1g7Ozs7Ozs7Ozs7Ozs7OztHQWVUO29HQW9DUSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi4vdHZtYXplLm1vZGVscyc7XG5pbXBvcnQgeyBUdm1hemVTZXJ2aWNlIH0gZnJvbSAnLi4vdHZtYXplLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bS1wb3N0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcG9zdGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGVmdFwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwicG9zdGVyX19pbWcgbGVmdFwiICpuZ0lmPVwicG9zdGVyVXJsJCB8IGFzeW5jIGFzIHBvc3RlclwiIFtzcmNdPVwicG9zdGVyLmltYWdlLm1lZGl1bVwiIC8+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgXG4gICAgICA8dWwgY2xhc3M9XCJwb3N0ZXJfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInBvc3Rlcl9fbmFtZVwiICpuZ0lmPVwicG9zdGVyVXJsJCB8IGFzeW5jIGFzIHBvc3RlclwiPjxwPk1vdmllcyBOYW1lOiB7e3Bvc3Rlci5uYW1lfX08L3A+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwicG9zdGVyX19yYXRpbmdcIiAqbmdJZj1cInBvc3RlclVybCQgfCBhc3luYyBhcyBwb3N0ZXJcIiA+PHA+UmF0aW5nOiB7e3Bvc3Rlci5yYXRpbmcuYXZlcmFnZX19PC9wPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInBvc3Rlcl9fc3VtbWFyeVwiICpuZ0lmPVwicG9zdGVyVXJsJCB8IGFzeW5jIGFzIHBvc3RlclwiIFtpbm5lckhUTUxdPVwicG9zdGVyLnN1bW1hcnlcIiA+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxlZnRcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInBvc3Rlcl9faW1nIHJpZ2h0XCIgKm5nSWY9XCJwb3N0ZXJVcmwkIHwgYXN5bmMgYXMgcG9zdGVyXCIgW3NyY109XCJwb3N0ZXIuaW1hZ2UubWVkaXVtXCIgLz5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnBvc3RlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAydnc7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5wb3N0ZXJfX2ltZy5sZWZ0IHtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIH1cblxuICAgIC5wb3N0ZXJfX2ltZy5yaWdodCB7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgICB9XG5cbiAgICAucG9zdGVyX19kZXNjcmlwdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiA0MHB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiA0MHB4O1xuXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2Y1MWI1MWM7XG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgIH1cblxuICAgIHVsIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0ICBjbGFzcyBQb3N0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBsZWZ0PzogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3N0ZXJVcmwkOiBPYnNlcnZhYmxlPFNob3c+IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHZtYXplOiBUdm1hemVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNob3dJZCk7XG4gICAgdGhpcy5wb3N0ZXJVcmwkID0gdGhpcy50dm1hemVcbiAgICAgIC5nZXRTaG93KHRoaXMuc2hvd0lkIHx8IDU1KVxuICAgICAgLnBpcGUobWFwKHNob3cgPT4gc2hvdykpO1xuICB9XG59Il19