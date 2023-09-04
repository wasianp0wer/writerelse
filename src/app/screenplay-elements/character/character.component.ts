import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() enforceCaps = true;

  constructor() { }

  ngOnInit(): void {
  }

}
