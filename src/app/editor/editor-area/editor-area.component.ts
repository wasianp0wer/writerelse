import { Component, HostListener } from '@angular/core';
import { DslConfigUtil } from '../../util/dsl-config.util';

@Component({
  selector: 'editor-area',
  standalone: true,
  imports: [],
  templateUrl: './editor-area.component.html',
  styleUrls: ['./editor-area.component.scss'],
})
export class EditorAreaComponent {
  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    console.log(window.getSelection() as any);
    console.log(
      (window.getSelection() as any).baseOffset + ', ' + (window.getSelection() as any).baseNode.parentNode.id
    );
    console.log(
      (window.getSelection() as any).extentOffset + ', ' + (window.getSelection() as any).extentNode.parentNode.id
    );

    DslConfigUtil.test();
  }

  getFontAspectRatios() {
    openType
  }
}
