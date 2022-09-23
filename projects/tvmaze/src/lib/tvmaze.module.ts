import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import  {PosterComponent}  from './poster/poster.component';
import { TvmazeComponent } from './tvmaze.component';
import { ContainerComponent } from './container/container.component';
import { TvmazeService } from './tvmaze.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PosterComponent, TvmazeComponent, ContainerComponent],
  exports: [PosterComponent, TvmazeComponent, ContainerComponent],
  providers:[TvmazeService]
})
export class TvmazeModule {}