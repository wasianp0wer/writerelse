import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {
  @Input() index!: number;
  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();

  textType = ScreenplayElementType.dialogue;

  constructor() { }

  ngOnInit(): void {
  }

}
