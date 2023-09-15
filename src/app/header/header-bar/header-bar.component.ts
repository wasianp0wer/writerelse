import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent {
  @Output() saveEmitter: EventEmitter<undefined> = new EventEmitter<undefined>();

  isCollapsed = false;
  activeTab: HeaderTab = HeaderTab.home;
  headerTab = HeaderTab;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  changeTab(tabName: HeaderTab) {
    this.activeTab = tabName;
  }

  save() {
    this.saveEmitter.emit(undefined);

  }
}

export enum HeaderTab {
  home,
  edit,
  view,
}
