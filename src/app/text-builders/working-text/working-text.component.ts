import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'working-text',
  templateUrl: './working-text.component.html',
  styleUrls: ['./working-text.component.scss'],
})
export class WorkingTextComponent implements AfterViewInit {
  @Input() isMouseDown?: boolean;
  @Input() textType?: string;
  @Input() spacingFromLeft = 0;

  @Output() isMouseDownChange: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('thistext') textboxRef: ElementRef;

  workableText!: HTMLInputElement;

  highlighting = false;
  editable = false;

  constructor() {}

  ngAfterViewInit(): void {
    this.workableText = this.textboxRef.nativeElement as HTMLInputElement;
  }

  makeHighlightable() {
    if (this.isMouseDown) {
      this.editable = false;
    }
  }

  handleMouseUp() {
    this.isMouseDown = false;
    this.editable = true;
    setTimeout(() => {
      this.textboxRef.nativeElement.focus();
    }, 0);
  }
}
