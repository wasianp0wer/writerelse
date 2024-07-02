import { Component, HostListener, OnInit, WritableSignal, signal } from '@angular/core';
import { DslConfigUtil } from '../../util/dsl-config.util';
import opentype from 'opentype.js';
import { ConfigRules } from '../../model/config/config-rules';

@Component({
  selector: 'editor-area',
  standalone: true,
  imports: [],
  templateUrl: './editor-area.component.html',
  styleUrls: ['./editor-area.component.scss'],
})
export class EditorAreaComponent {
  config: ConfigRules = DslConfigUtil.getCurrentConfig();
  lines: WritableSignal<string[]> = signal([]);

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    this.getFontAspectRatio('a');
  }

  getFontAspectRatio(character: string): void {
    opentype.load('assets/fonts/cour.ttf', function (err, font) {
      if (err) {
        console.error(err);
      } else {
        console.log(font);
        const glyph = font.charToGlyph(character);
        const bbox = glyph.getBoundingBox();

        const width = bbox.x2 - bbox.x1;
        const height = bbox.y2 - bbox.y1;

        if (height === 0) {
          console.log('no');
        } else {
          const aspectRatio = width / height;
          console.log(aspectRatio);
        }
      }
    });
  }
}
