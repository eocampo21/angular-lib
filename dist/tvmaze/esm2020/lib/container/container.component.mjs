import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: ContainerComponent, selector: "tm-container", inputs: { title: "title", subtitle: "subtitle" }, ngImport: i0, template: "<div class=\"container p-3\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h1>{{title}}</h1>\n            <h2>{{subtitle}}</h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <ng-content></ng-content>\n    </div>\n</div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tm-container', template: "<div class=\"container p-3\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h1>{{title}}</h1>\n            <h2>{{subtitle}}</h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <ng-content></ng-content>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3R2bWF6ZS9zcmMvbGliL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHZtYXplL3NyYy9saWIvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFPekQsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7K0dBUFUsa0JBQWtCO21HQUFsQixrQkFBa0Isc0dDUC9CLHVRQVVNOzJGREhPLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxjQUFjOzBFQUtmLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RtLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250YWluZXIuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZyA7XG4gIEBJbnB1dCgpIHN1YnRpdGxlPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwLTNcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxoMT57e3RpdGxlfX08L2gxPlxuICAgICAgICAgICAgPGgyPnt7c3VidGl0bGV9fTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19