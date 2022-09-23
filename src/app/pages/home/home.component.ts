import { Component, OnInit } from '@angular/core';
import { Show } from 'dist/tvmaze/lib/tvmaze.models';
import { map } from 'rxjs';
import { TvmazeService } from 'tvmaze';

@Component({
  selector: 'ld-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private tvmaze: TvmazeService) { }
 
  movies = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20];
  results: Show[] = [];
  
  ngOnInit(): void {
    this.movies.map((i) => {
      this.tvmaze
      .getShow(i)
      .pipe(map(show => {this.results[i] = show})).subscribe();
    })
  }
}
