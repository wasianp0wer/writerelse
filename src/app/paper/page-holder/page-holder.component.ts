import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { FocusService } from '../../service/focus.service';
@Component({
  selector: 'page-holder',
  templateUrl: './page-holder.component.html',
  styleUrls: ['./page-holder.component.scss']
})
export class PageHolderComponent implements OnInit {
  @Input() screenplay: PageElement[] = [
    {type: ScreenplayElementType.slug, content: 'INT. BEDROOM - MORNING'},
    {type: ScreenplayElementType.action,
      content: 'An alarm clock goes off on a bedside table. A hand enters frame and turns it off. STEVE (42) groans in his bed'}
  ];

  screenplayElementType = ScreenplayElementType;


  private focusService = inject(FocusService);


  constructor() { }

  ngOnInit(): void {
  }

  handleKeypress(previousElement: ScreenplayElementType, index: number, event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter': {
        event.preventDefault();
        const newElement = {type: ScreenplayElementType.action, content: ''};
        this.screenplay.splice(index + 1, 0, newElement);
        setTimeout(() => this.focusService.focusElementById(`line-${index + 1}`), 0);
        // this.focusService.focusElementById(`line-${index + 1}`);
      }
    }
  }

}

export interface PageElement {
  type: ScreenplayElementType;
  content: string;
}

export enum ScreenplayElementType {
  action,
  character,
  dialogue,
  parenthetical,
  slug,
  transition
}
