import { Component, OnInit } from '@angular/core';
import { Show } from 'dist/tvmaze/lib/tvmaze.models';
import { TvmazeService } from 'projects/tvmaze/src/lib/tvmaze.service';
import { map } from 'rxjs';

@Component({
  selector: 'ld-root',
  templateUrl:"./app.component.html",
  styleUrls:["./app.component.sass"],
})
export class AppComponent implements OnInit {
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