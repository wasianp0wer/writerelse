import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingTextComponent } from './working-text/working-text.component';



@NgModule({
  declarations: [WorkingTextComponent],
  imports: [
    CommonModule
  ],
  exports: [WorkingTextComponent]
})
export class TextBuildersModule { }
