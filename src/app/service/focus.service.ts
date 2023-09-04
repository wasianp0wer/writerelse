import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FocusService {

  constructor() { }

  focusElementById(id: string) {
    const element = document.getElementById(id);
    element.contentEditable = 'true';
    element.focus();
  }
}
