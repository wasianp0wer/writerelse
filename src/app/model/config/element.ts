import { Segment } from './segment';

export class Element {
  name: string;
  followedBy: string[];
  align: 'LEFT' | 'CENTER' | 'RIGHT' = 'LEFT';
  indentation: number = 0;
  indentationUnits: 'in' | 'px' | 'cm' = 'in';
  capitalization: 'ALL_CAPS' | 'FIRST_CAPS' | 'NO_CAPS' = 'FIRST_CAPS';
  useSuggestionsFromPrevious: boolean = false;
  defaultSuggestions?: string[];
  segmentDelimeter?: string;
  segments?: Segment[];

  constructor(name: string, followedBy: string[]) {
    this.name = name;
    this.followedBy = followedBy;
    if (!!this.segments) {
      this.segments = this.segments.map((segment) => {
        const newSegment = new Segment();
        Object.assign(newSegment, segment);
        return newSegment;
      });
    }
  }

  validate() {
    if (!!this.segments && !this.segmentDelimeter) {
      throw Error('Segment delimeter is required.')
    }
  }
}
