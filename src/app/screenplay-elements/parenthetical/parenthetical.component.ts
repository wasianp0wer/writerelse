import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';

@Component({
  selector: 'parenthetical',
  templateUrl: './parenthetical.component.html',
  styleUrls: ['./parenthetical.component.scss']
})
export class ParentheticalComponent implements OnInit {
  @Input() index!: number;
  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();

  textType = ScreenplayElementType.parenthetical;

  constructor() { }

  ngOnInit(): void {
  }

}
