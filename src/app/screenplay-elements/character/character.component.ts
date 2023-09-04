import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() index!: number;
  @Input() enforceCaps = true;
  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();

  textType = ScreenplayElementType.character;

  constructor() { }

  ngOnInit(): void {
  }

}
