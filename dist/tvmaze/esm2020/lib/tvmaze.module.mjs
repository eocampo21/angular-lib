import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import { TvmazeComponent } from './tvmaze.component';
import { ContainerComponent } from './container/container.component';
import * as i0 from "@angular/core";
export class TvmazeModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZtYXplLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3R2bWF6ZS9zcmMvbGliL3R2bWF6ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBUSxFQUFDLGVBQWUsRUFBQyxNQUFPLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFPckUsTUFBTSxPQUFPLFlBQVk7O3lHQUFaLFlBQVk7MEdBQVosWUFBWSxpQkFIUixlQUFlLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixhQUR6RCxZQUFZLEVBQUUsZ0JBQWdCLGFBRTlCLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCOzBHQUVuRCxZQUFZLFlBSmIsWUFBWSxFQUFFLGdCQUFnQjsyRkFJN0IsWUFBWTtrQkFMeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3BFLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7aUJBQ2hFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0ICB7UG9zdGVyQ29tcG9uZW50fSAgZnJvbSAnLi9wb3N0ZXIvcG9zdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUdm1hemVDb21wb25lbnQgfSBmcm9tICcuL3R2bWF6ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQb3N0ZXJDb21wb25lbnQsIFR2bWF6ZUNvbXBvbmVudCwgQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Bvc3RlckNvbXBvbmVudCwgVHZtYXplQ29tcG9uZW50LCBDb250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFR2bWF6ZU1vZHVsZSB7fSJdfQ==