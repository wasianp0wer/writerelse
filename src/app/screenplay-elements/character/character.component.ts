import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';
import { NgStyle } from '@angular/common';
import { WorkingTextComponent } from '../../text-builders/working-text/working-text.component';

@Component({
    selector: 'character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss'],
    standalone: true,
    imports: [WorkingTextComponent, NgStyle],
})
export class CharacterComponent implements OnInit {
  @Input() index!: number;
  @Input() enforceCaps = true;
  @Input() model!: string;

  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

  textType = ScreenplayElementType.character;

  constructor() {}

  ngOnInit(): void {}
}
