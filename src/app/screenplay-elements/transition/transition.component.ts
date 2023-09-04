import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';

@Component({
  selector: 'transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
  @Input() index!: number;
  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();


  textType = ScreenplayElementType.transition;

  constructor() { }

  ngOnInit(): void {
  }

}
