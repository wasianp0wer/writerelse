import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { Page } from 'playwright';
import { ConfigurationService } from '../../service/configuration.service';
import { FocusService } from '../../service/focus.service';
import { TransitionComponent } from '../../screenplay-elements/transition/transition.component';
import { SlugComponent } from '../../screenplay-elements/slug/slug.component';
import { ParentheticalComponent } from '../../screenplay-elements/parenthetical/parenthetical.component';
import { DialogueComponent } from '../../screenplay-elements/dialogue/dialogue.component';
import { CharacterComponent } from '../../screenplay-elements/character/character.component';
import { ActionComponent } from '../../screenplay-elements/action/action.component';
import { NgFor, NgIf } from '@angular/common';
import { SinglePageComponent } from '../single-page/single-page.component';
@Component({
    selector: 'page-holder',
    templateUrl: './page-holder.component.html',
    styleUrls: ['./page-holder.component.scss'],
    standalone: true,
    imports: [
        SinglePageComponent,
        NgFor,
        NgIf,
        ActionComponent,
        CharacterComponent,
        DialogueComponent,
        ParentheticalComponent,
        SlugComponent,
        TransitionComponent,
    ],
})
export class PageHolderComponent implements OnInit {
  @Input() screenplay: PageElement[] = [
    { type: ScreenplayElementType.transition, content: 'FADE IN:' },
    { type: ScreenplayElementType.slug, content: 'INT. BEDROOM - MORNING' },
    {
      type: ScreenplayElementType.action,
      content:
        'An alarm clock goes off on a bedside table. A hand enters frame and turns it off. JOHN (18, everyman) groans in his bed.',
    },
    { type: ScreenplayElementType.character, content: 'john' },
    { type: ScreenplayElementType.parenthetical, content: '(annoyed)' },
    { type: ScreenplayElementType.dialogue, content: 'Ugh... not another morning!' },
  ];

  screenplayElementType = ScreenplayElementType;

  private focusService = inject(FocusService);
  private configurationService = inject(ConfigurationService);

  constructor() {}

  ngOnInit(): void {}

  handleKeypress(previousElement: ScreenplayElementType, index: number, event: KeyboardEvent) {
    const config = this.configurationService.getKeyConfiguration();
    console.log(event.key);
    switch (event.key) {
      case config.newLine: {
        event.preventDefault();
        this.generateNextLine(previousElement, index);
        break;
      }
      case config.changeElementType: {
        //todo: if there is text, go to next element otherwise change element type
        if (index + 1 < this.screenplay.length && 0 < this.getActualLineLength(this.screenplay[index])) {
          this.focusService.focusElementById(`line-${index + 1}`);
        } else if (index + 1 === this.screenplay.length && 0 < this.getActualLineLength(this.screenplay[index])) {
          this.generateNextLine(previousElement, index, false);
        } else if (0 === this.getActualLineLength(this.screenplay[index])) {
          const previousType = this.screenplay[index].type;
          const nextType = this.nextScreenplayElementType(this.screenplay[index].type);
          this.screenplay[index].type = nextType;
          if (this.screenplay[index].type === ScreenplayElementType.parenthetical) {
            this.screenplay[index].content = '()';
            setTimeout(() => this.focusService.focusAndSetCursorToPositionById(`line-${index}`, 1), 0);
          } else {
            this.trimParenthetical(previousType, index);
            setTimeout(() => this.focusService.focusElementById(`line-${index}`), 0);
          }
        }
        event.preventDefault();
        break;
      }
      case 'Backspace': {
        // todo: handle backspace logic. this is gonna be annoying.
        const selection = window.getSelection();
        if (document.activeElement.textContent.length === 0 && this.screenplay.length > 1) {
          // do not let the last line get deleted.
          this.screenplay.splice(index, 1);
          this.focusService.focusAndSetCursorToEndById(`line-${index - 1}`);
          event.preventDefault();
        } else if (
          !this.focusService.doesSelectionCoverMultipleTags(selection) &&
          selection.anchorOffset === 0 &&
          selection.focusOffset === 0 &&
          index > 0
        ) {
          const position = this.screenplay[index - 1].content.length;
          this.screenplay[index - 1].content = this.screenplay[index - 1].content + this.screenplay[index].content;
          this.screenplay.splice(index, 1);
          setTimeout(() => this.focusService.focusAndSetCursorToPositionById(`line-${index - 1}`, position), 0);

          event.preventDefault();
        }
        break;
      }
      case 'ArrowUp': {
        const selection = window.getSelection();
        if (!this.focusService.doesSelectionCoverMultipleTags(selection) && selection.anchorOffset === 0 && index > 0) {
          this.focusService.focusAndSetCursorToEndById(`line-${index - 1}`);
          event.preventDefault();
        }
        break;
      }
      case 'ArrowDown': {
        const selection = window.getSelection();
        if (
          !this.focusService.doesSelectionCoverMultipleTags(selection) &&
          selection.anchorOffset === this.screenplay[index].content.length &&
          index + 1 < this.screenplay.length
        ) {
          this.focusService.focusElementById(`line-${index + 1}`);
          event.preventDefault();
        }
      }
    }
  }

  getActualLineLength(pageElement: PageElement) {
    if (
      pageElement.type === ScreenplayElementType.parenthetical &&
      pageElement.content.length >= 2 &&
      pageElement.content.startsWith('(') &&
      pageElement.content.endsWith(')')
    ) {
      return pageElement.content.length - 2;
    }
    return pageElement.content.length;
  }

  focusById(id: string) {
    this.focusService.focusElementById(id);
  }

  trimParenthetical(previousElement: ScreenplayElementType, index: number) {
    if (
      previousElement === ScreenplayElementType.parenthetical &&
      this.screenplay[index].content.startsWith('(') &&
      this.screenplay[index].content.endsWith(')')
    ) {
      this.screenplay[index].content = this.screenplay[index].content.slice(
        1,
        this.screenplay[index].content.length - 1
      );
    }
  }

  generateNextLine(previousElement: ScreenplayElementType, index: number, useRightContent: boolean = true) {
    let newElementType;
    switch (previousElement) {
      case ScreenplayElementType.character:
      case ScreenplayElementType.parenthetical: {
        newElementType = ScreenplayElementType.dialogue;
        break;
      }
      case ScreenplayElementType.transition: {
        newElementType = ScreenplayElementType.slug;
        break;
      }
      case ScreenplayElementType.dialogue: {
        newElementType = ScreenplayElementType.character;
        break;
      }
      case ScreenplayElementType.action:
      case ScreenplayElementType.slug:
      default: {
        newElementType = ScreenplayElementType.action;
        break;
      }
    }
    const selection = window.getSelection();
    let content = '';
    if (
      !this.focusService.doesSelectionCoverMultipleTags(selection) &&
      selection.anchorOffset === selection.focusOffset &&
      useRightContent
    ) {
      content = this.screenplay[index].content.slice(selection.focusOffset);
      this.screenplay[index].content = this.screenplay[index].content.slice(0, selection.focusOffset);
    }
    const newElement = { type: newElementType, content };
    this.screenplay.splice(index + 1, 0, newElement);
    setTimeout(() => this.focusService.focusElementById(`line-${index + 1}`), 0);
  }

  nextScreenplayElementType(screenplayElementType: ScreenplayElementType): ScreenplayElementType {
    switch (screenplayElementType) {
      case ScreenplayElementType.slug: {
        return ScreenplayElementType.action;
      }
      case ScreenplayElementType.action: {
        return ScreenplayElementType.character;
      }
      case ScreenplayElementType.character: {
        return ScreenplayElementType.transition;
      }
      case ScreenplayElementType.transition: {
        return ScreenplayElementType.slug;
      }
      case ScreenplayElementType.parenthetical: {
        return ScreenplayElementType.dialogue;
      }
      case ScreenplayElementType.dialogue: {
        return ScreenplayElementType.parenthetical;
      }
      default: {
        return ScreenplayElementType.action;
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
  transition,
}
