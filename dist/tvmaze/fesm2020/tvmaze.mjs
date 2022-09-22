import * as i0 from '@angular/core';
import { Component, Injectable, Input, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class TvmazeComponent {
    constructor() { }
    ngOnInit() {
    }
}
TvmazeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TvmazeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: TvmazeComponent, selector: "tm-tvmaze", ngImport: i0, template: "", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tm-tvmaze', template: "" }]
        }], ctorParameters: function () { return []; } });

class TvmazeService {
    constructor(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    getShow(id) {
        const url = `${this.apiRoot}/shows/${id}`;
        return this.http.get(url);
    }
}
TvmazeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
TvmazeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class PosterComponent {
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
PosterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: PosterComponent, deps: [{ token: TvmazeService }], target: i0.ɵɵFactoryTarget.Component });
PosterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: PosterComponent, selector: "tm-poster", inputs: { showId: "showId", left: "left" }, ngImport: i0, template: "<div class=\"poster my-3\">\n  <ng-container *ngIf=\"left\">\n    <img class=\"poster__img left\" *ngIf=\"posterUrl$ | async as poster\" [src]=\"poster.image.medium\" />\n  </ng-container>\n\n  <ul class=\"poster__description\">\n    <li class=\"poster__name\" *ngIf=\"posterUrl$ | async as poster\"><p>Movies Name: {{poster.name}}</p></li>\n    <li class=\"poster__rating\" *ngIf=\"posterUrl$ | async as poster\" ><p>Rating: {{poster.rating.average}}</p></li>\n    <li class=\"poster__summary\" *ngIf=\"posterUrl$ | async as poster\" [innerHTML]=\"poster.summary\" ></li>\n  </ul>\n\n  <ng-container *ngIf=\"!left\">\n    <img class=\"poster__img right\" *ngIf=\"posterUrl$ | async as poster\" [src]=\"poster.image.medium\" />\n  </ng-container>\n</div>", styles: [".poster{display:flex;overflow:hidden}.poster__img.left{border-bottom-left-radius:30px;border-top-left-radius:30px}.poster__img.right{border-bottom-right-radius:30px;border-top-right-radius:30px}.poster__description{display:flex;flex-direction:column;justify-content:center;padding-inline-end:40px;border:1px solid rgba(63,81,181,.1098039216);margin-block-start:0;margin-block-end:0}ul li{list-style-type:none}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: PosterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tm-poster', template: "<div class=\"poster my-3\">\n  <ng-container *ngIf=\"left\">\n    <img class=\"poster__img left\" *ngIf=\"posterUrl$ | async as poster\" [src]=\"poster.image.medium\" />\n  </ng-container>\n\n  <ul class=\"poster__description\">\n    <li class=\"poster__name\" *ngIf=\"posterUrl$ | async as poster\"><p>Movies Name: {{poster.name}}</p></li>\n    <li class=\"poster__rating\" *ngIf=\"posterUrl$ | async as poster\" ><p>Rating: {{poster.rating.average}}</p></li>\n    <li class=\"poster__summary\" *ngIf=\"posterUrl$ | async as poster\" [innerHTML]=\"poster.summary\" ></li>\n  </ul>\n\n  <ng-container *ngIf=\"!left\">\n    <img class=\"poster__img right\" *ngIf=\"posterUrl$ | async as poster\" [src]=\"poster.image.medium\" />\n  </ng-container>\n</div>", styles: [".poster{display:flex;overflow:hidden}.poster__img.left{border-bottom-left-radius:30px;border-top-left-radius:30px}.poster__img.right{border-bottom-right-radius:30px;border-top-right-radius:30px}.poster__description{display:flex;flex-direction:column;justify-content:center;padding-inline-end:40px;border:1px solid rgba(63,81,181,.1098039216);margin-block-start:0;margin-block-end:0}ul li{list-style-type:none}\n"] }]
        }], ctorParameters: function () { return [{ type: TvmazeService }]; }, propDecorators: { showId: [{
                type: Input
            }], left: [{
                type: Input
            }] } });

class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: ContainerComponent, selector: "tm-container", inputs: { title: "title", subtitle: "subtitle" }, ngImport: i0, template: "<div class=\"container-fluid p-3\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h1>{{title}}</h1>\n            <h3>{{subtitle}}</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tm-container', template: "<div class=\"container-fluid p-3\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h1>{{title}}</h1>\n            <h3>{{subtitle}}</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }] } });

class TvmazeModule {
}
TvmazeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TvmazeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.2", ngImport: i0, type: TvmazeModule, declarations: [PosterComponent, TvmazeComponent, ContainerComponent], imports: [CommonModule, HttpClientModule], exports: [PosterComponent, TvmazeComponent, ContainerComponent] });
TvmazeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeModule, imports: [CommonModule, HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule],
                    declarations: [PosterComponent, TvmazeComponent, ContainerComponent],
                    exports: [PosterComponent, TvmazeComponent, ContainerComponent]
                }]
        }] });

/*
 * Public API Surface of tvmaze
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ContainerComponent, PosterComponent, TvmazeComponent, TvmazeModule };
//# sourceMappingURL=tvmaze.mjs.map
