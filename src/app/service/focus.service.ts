import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FocusService {
  constructor() {}

  focusElementById(id: string) {
    const element = document.getElementById(id);
    element.contentEditable = 'true';
    element.focus();
  }

  setCursorToEnd(element: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  setCursorToPosition(element: HTMLElement, position: number) {
    const range = document.createRange();
    console.log(position);
    range.setStart(element.childNodes[0], position);
    range.collapse(true);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  doesSelectionCoverMultipleTags(selection: Selection): boolean {
    //todo
    return false;
  }

  focusAndSetCursorToEndById(id: string) {
    this.focusElementById(id);
    this.setCursorToEnd(document.getElementById(id));
  }

  focusAndSetCursorToPositionById(id: string, position: number) {
    this.focusElementById(id);
    this.setCursorToPosition(document.getElementById(id), position);
  }
}
