import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueComponent } from './dialogue/dialogue.component';
import { CharacterComponent } from './character/character.component';
import { ActionComponent } from './action/action.component';
import { SlugComponent } from './slug/slug.component';
import { TransitionComponent } from './transition/transition.component';
import { TextBuildersModule } from '../text-builders/text-builders.module';
import { ParentheticalComponent } from './parenthetical/parenthetical.component';



@NgModule({
  declarations: [
    DialogueComponent,
    CharacterComponent,
    ActionComponent,
    SlugComponent,
    TransitionComponent,
    ParentheticalComponent
  ],
  imports: [
    CommonModule, TextBuildersModule
  ],
  exports: [
    DialogueComponent,
    CharacterComponent,
    ActionComponent,
    SlugComponent,
    TransitionComponent,
    ParentheticalComponent

  ]
})
export class ScreenplayElementsModule { }
