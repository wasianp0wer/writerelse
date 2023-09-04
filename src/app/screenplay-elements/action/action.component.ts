import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';

@Component({
  selector: 'action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Input() index!: number;

  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();

  textType = ScreenplayElementType.action;

  constructor() { }

  ngOnInit(): void {
  }

}
