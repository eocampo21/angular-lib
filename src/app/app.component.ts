import { Component } from '@angular/core';

@Component({
  selector: 'ld-root',
  template: `
    <tm-tvmaze></tm-tvmaze>
    <tm-poster [showId]="7" [left]="true" ></tm-poster>
    <tm-poster [showId]="2" [left]="false" ></tm-poster>
    <tm-poster [showId]="4" [left]="true" ></tm-poster>
    <tm-poster [showId]="5" [left]="false" ></tm-poster>
    <tm-poster [showId]="6" [left]="true" ></tm-poster>
    <tm-tvmaze></tm-tvmaze>
  `
})
export class AppComponent {}