import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tm-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {
  @Input() title?: string ;
  @Input() subtitle?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
