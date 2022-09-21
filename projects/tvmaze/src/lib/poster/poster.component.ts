import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../tvmaze.models';
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'tm-poster',
  templateUrl: `./poster.component.html`,
  styleUrls: [`./poster.component.sass`]
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