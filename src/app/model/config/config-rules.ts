import { rejects } from 'assert';
import { Element } from './element';

export class ConfigRules {
  name: string;
  elements: { [key: string]: Element };
  sceneDelimeter?: string;
  actDelimeter?: string;
  characterIdentifier?: string;
  pageHeight: number = 11;
  pageWidth: number = 8.5;
  validStarts: string[];
  pageDefinitionUnits: 'in' | 'cm' = 'in';

  constructor(json: string) {
    const jsonRead: Object = JSON.parse(json);
    Object.assign(this, jsonRead);
    for (const key of Object.keys(this.elements)) {
      const newElement = new Element(this.elements[key].name, this.elements[key].followedBy);
      Object.assign(newElement, this.elements[key]);
      this.elements[key] = newElement;
    }
  }

  validate(): void {
    const elementTypes: string[] = Array.from(Object.keys(this.elements)).map((s) => s.toString());
    if (!!this.sceneDelimeter && !elementTypes.includes(this.sceneDelimeter)) {
      throw Error('Scene delimeter must be a defined element type');
    }
    if (!!this.actDelimeter && !elementTypes.includes(this.actDelimeter)) {
      throw Error('Act delimeter must be a defined element type');
    }
  }
}
