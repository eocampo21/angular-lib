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
PosterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: PosterComponent, selector: "tm-poster", inputs: { showId: "showId", left: "left" }, ngImport: i0, template: "<div class=\"poster my-3\">\n    <img class=\"poster__img\" *ngIf=\"posterUrl$ | async as poster\" [src]=\"poster.image.medium\" />\n    <p class=\"poster__rating mt-3\" *ngIf=\"posterUrl$ | async as poster\" >Rating: {{poster.rating.average}}</p>\n</div>", styles: [".poster{display:flex;overflow:hidden;flex-direction:column;text-align:center}.poster__img{border-bottom-left-radius:30px;border-top-left-radius:30px;border-top-left-radius-border-bottom-right-radius:30px;border-top-right-radius:30px}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: PosterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tm-poster', template: "<div class=\"poster my-3\">\n    <img class=\"poster__img\" *ngIf=\"posterUrl$ | async as poster\" [src]=\"poster.image.medium\" />\n    <p class=\"poster__rating mt-3\" *ngIf=\"posterUrl$ | async as poster\" >Rating: {{poster.rating.average}}</p>\n</div>", styles: [".poster{display:flex;overflow:hidden;flex-direction:column;text-align:center}.poster__img{border-bottom-left-radius:30px;border-top-left-radius:30px;border-top-left-radius-border-bottom-right-radius:30px;border-top-right-radius:30px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TvmazeService }]; }, propDecorators: { showId: [{
                type: Input
            }], left: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3R2bWF6ZS9zcmMvbGliL3Bvc3Rlci9wb3N0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHZtYXplL3NyYy9saWIvcG9zdGVyL3Bvc3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFTckMsTUFBTSxPQUFRLGVBQWU7SUFLM0IsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUpoQyxXQUFNLEdBQWtCLElBQUksQ0FBQztRQUM3QixTQUFJLEdBQWEsS0FBSyxDQUFDO0lBSWhDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTthQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7NEdBYlcsZUFBZTtnR0FBZixlQUFlLDZGQ1g3QixpUUFHTTsyRkRRUSxlQUFlO2tCQUw1QixTQUFTOytCQUNFLFdBQVc7b0dBS1osTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2hvdyB9IGZyb20gJy4uL3R2bWF6ZS5tb2RlbHMnO1xuaW1wb3J0IHsgVHZtYXplU2VydmljZSB9IGZyb20gJy4uL3R2bWF6ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG0tcG9zdGVyJyxcbiAgdGVtcGxhdGVVcmw6IGAuL3Bvc3Rlci5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW2AuL3Bvc3Rlci5jb21wb25lbnQuc2Fzc2BdXG59KVxuZXhwb3J0ICBjbGFzcyBQb3N0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBsZWZ0PzogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3N0ZXJVcmwkOiBPYnNlcnZhYmxlPFNob3c+IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHZtYXplOiBUdm1hemVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNob3dJZCk7XG4gICAgdGhpcy5wb3N0ZXJVcmwkID0gdGhpcy50dm1hemVcbiAgICAgIC5nZXRTaG93KHRoaXMuc2hvd0lkIHx8IDU1KVxuICAgICAgLnBpcGUobWFwKHNob3cgPT4gc2hvdykpO1xuICB9XG59IiwiPGRpdiBjbGFzcz1cInBvc3RlciBteS0zXCI+XG4gICAgPGltZyBjbGFzcz1cInBvc3Rlcl9faW1nXCIgKm5nSWY9XCJwb3N0ZXJVcmwkIHwgYXN5bmMgYXMgcG9zdGVyXCIgW3NyY109XCJwb3N0ZXIuaW1hZ2UubWVkaXVtXCIgLz5cbiAgICA8cCBjbGFzcz1cInBvc3Rlcl9fcmF0aW5nIG10LTNcIiAqbmdJZj1cInBvc3RlclVybCQgfCBhc3luYyBhcyBwb3N0ZXJcIiA+UmF0aW5nOiB7e3Bvc3Rlci5yYXRpbmcuYXZlcmFnZX19PC9wPlxuPC9kaXY+Il19