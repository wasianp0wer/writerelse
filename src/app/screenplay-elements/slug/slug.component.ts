import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenplayElementType } from '../../paper/page-holder/page-holder.component';

@Component({
  selector: 'slug',
  templateUrl: './slug.component.html',
  styleUrls: ['./slug.component.scss']
})
export class SlugComponent implements OnInit {
  @Input() index!: number;
  @Input() enforceCaps = true;
  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter();


  textType = ScreenplayElementType.slug;

  constructor() { }

  ngOnInit(): void {
  }

}
