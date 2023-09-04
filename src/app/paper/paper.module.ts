import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePageComponent } from './single-page/single-page.component';
import { ScreenplayElementsModule } from '../screenplay-elements/screenplay-elements.module';



@NgModule({
  declarations: [
    SinglePageComponent
  ],
  imports: [
    CommonModule, ScreenplayElementsModule
  ],
  exports: [
    SinglePageComponent
  ]
})
export class PaperModule { }
