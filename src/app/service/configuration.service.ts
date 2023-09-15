import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  getKeyConfiguration(): KeyConfiguration {
    // todo: retrieve file from appdata and read it to replace default values if they exist, otherwise use defaults
    return {
      newLine: 'Enter',
      changeElementType: 'Tab'
    };
  };
}

export interface KeyConfiguration {
  newLine: string;
  changeElementType: string;
}
