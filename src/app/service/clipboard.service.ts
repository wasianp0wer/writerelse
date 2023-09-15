import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor() { }

  // Todo: copying should store in localstorage or similar, statefully, and also copy something different to clipboard.
  // So if you copy to anywhere but the program, it's tabbed properly, but if you copy within program, it automatically
  // applies formatting because it's stored in json locally. Also validate when pasting that localstorage == clipboard,
  // if they are different we should just paste in directly whatever is in the clipboard
}
