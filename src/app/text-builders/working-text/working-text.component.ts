import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';

@Component({
  selector: 'working-text',
  templateUrl: './working-text.component.html',
  styleUrls: ['./working-text.component.scss'],
})
export class WorkingTextComponent implements AfterViewInit {
  // MAJOR TODO: changing the text isn't actually changing the screenplay object due to the lack of an ngmodel. must fix asap.
  @Input() isMouseDown?: boolean;
  @Input() textType?: ScreenplayElementType;
  @Input() spacingFromLeft = 0;
  @Input() index!: number;
  @Input() model!: string;

  @Output() isMouseDownChange: EventEmitter<boolean> = new EventEmitter();
  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

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

  handleKeyPress($event: KeyboardEvent) {
    this.keyPressed.emit($event);
  }

  updateModel() {
    this.model = this.textboxRef.nativeElement.textContent;
    this.modelChange.emit(this.model);
  }
}
