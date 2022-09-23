import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../tvmaze.models';
@Component({
  selector: 'tm-poster',
  templateUrl: `./poster.component.html`,
  styleUrls: [`./poster.component.sass`]
})
export  class PosterComponent implements OnInit {
  @Input() posterProps: Show | undefined; 

  constructor() { }

  ngOnInit() { }

}