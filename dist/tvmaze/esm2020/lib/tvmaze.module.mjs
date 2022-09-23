import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import { TvmazeComponent } from './tvmaze.component';
import { ContainerComponent } from './container/container.component';
import { PosterDetailComponent } from './poster-detail/poster-detail.component';
import { TvmazeService } from './tvmaze.service';
import * as i0 from "@angular/core";
export class TvmazeModule {
}
TvmazeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TvmazeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.2", ngImport: i0, type: TvmazeModule, declarations: [PosterComponent, TvmazeComponent, ContainerComponent, PosterDetailComponent], imports: [CommonModule, HttpClientModule], exports: [PosterComponent, TvmazeComponent, ContainerComponent] });
TvmazeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeModule, providers: [TvmazeService], imports: [CommonModule, HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: TvmazeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule],
                    declarations: [PosterComponent, TvmazeComponent, ContainerComponent, PosterDetailComponent],
                    exports: [PosterComponent, TvmazeComponent, ContainerComponent],
                    providers: [TvmazeService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZtYXplLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3R2bWF6ZS9zcmMvbGliL3R2bWF6ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBUSxFQUFDLGVBQWUsRUFBQyxNQUFPLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBUWpELE1BQU0sT0FBTyxZQUFZOzt5R0FBWixZQUFZOzBHQUFaLFlBQVksaUJBSlIsZUFBZSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsYUFEaEYsWUFBWSxFQUFFLGdCQUFnQixhQUU5QixlQUFlLEVBQUUsZUFBZSxFQUFFLGtCQUFrQjswR0FHbkQsWUFBWSxhQUZiLENBQUMsYUFBYSxDQUFDLFlBSGYsWUFBWSxFQUFFLGdCQUFnQjsyRkFLN0IsWUFBWTtrQkFOeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLENBQUM7b0JBQzNGLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7b0JBQy9ELFNBQVMsRUFBQyxDQUFDLGFBQWEsQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgIHtQb3N0ZXJDb21wb25lbnR9ICBmcm9tICcuL3Bvc3Rlci9wb3N0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFR2bWF6ZUNvbXBvbmVudCB9IGZyb20gJy4vdHZtYXplLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBvc3RlckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vcG9zdGVyLWRldGFpbC9wb3N0ZXItZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUdm1hemVTZXJ2aWNlIH0gZnJvbSAnLi90dm1hemUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQb3N0ZXJDb21wb25lbnQsIFR2bWF6ZUNvbXBvbmVudCwgQ29udGFpbmVyQ29tcG9uZW50LCBQb3N0ZXJEZXRhaWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUG9zdGVyQ29tcG9uZW50LCBUdm1hemVDb21wb25lbnQsIENvbnRhaW5lckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczpbVHZtYXplU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVHZtYXplTW9kdWxlIHt9Il19