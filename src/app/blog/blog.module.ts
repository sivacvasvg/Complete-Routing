import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { StoryComponent } from './story/story.component';


@NgModule({
  declarations: [
    PuzzleComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
