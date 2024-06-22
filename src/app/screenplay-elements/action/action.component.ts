import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';
import { WorkingTextComponent } from '../../text-builders/working-text/working-text.component';

@Component({
    selector: 'action',
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.scss'],
    standalone: true,
    imports: [WorkingTextComponent]
})
export class ActionComponent implements OnInit {
  @Input() index!: number;
  @Input() model!: string;

  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

  textType = ScreenplayElementType.action;

  constructor() { }

  ngOnInit(): void {
  }

}
