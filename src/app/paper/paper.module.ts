import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePageComponent } from './single-page/single-page.component';
import { ScreenplayElementsModule } from '../screenplay-elements/screenplay-elements.module';
import { PageHolderComponent } from './page-holder/page-holder.component';



@NgModule({
  declarations: [
    SinglePageComponent,
    PageHolderComponent
  ],
  imports: [
    CommonModule, ScreenplayElementsModule
  ],
  exports: [
    SinglePageComponent,
    PageHolderComponent
  ]
})
export class PaperModule { }
