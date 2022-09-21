import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../tvmaze.models';
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'tm-poster',
  template: `
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
  `,
  styles: [`
    .poster {
      display: flex;
      margin: 2vw;
      overflow: hidden;
    }

    .poster__img.left {
      border-bottom-left-radius: 30px;
      border-top-left-radius: 30px;
    }

    .poster__img.right {
      border-bottom-right-radius: 30px;
      border-top-right-radius: 30px;
     }

    .poster__description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-inline-end: 40px;
      padding-inline-end: 40px;

      border: 1px solid #3f51b51c;
      margin-block-start: 0;
      margin-block-end: 0;
    }

    ul li {
      list-style-type: none;
    }
  `]
})
export  class PosterComponent implements OnInit {
  @Input() showId: number | null = null;
  @Input() left?: boolean = false;
  posterUrl$: Observable<Show> | undefined;

  constructor(private tvmaze: TvmazeService) {
  }

  ngOnInit() {
    console.log(this.showId);
    this.posterUrl$ = this.tvmaze
      .getShow(this.showId || 55)
      .pipe(map(show => show));
  }
}