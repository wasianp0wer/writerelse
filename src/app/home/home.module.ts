import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TextBuildersModule } from '../text-builders/text-builders.module';
import { ScreenplayElementsModule } from '../screenplay-elements/screenplay-elements.module';
import { PaperModule } from '../paper/paper.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    TextBuildersModule,
    ScreenplayElementsModule,
    PaperModule,
    HeaderModule,
  ],
})
export class HomeModule {}
