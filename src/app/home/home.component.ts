import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageHolderComponent } from '../paper/page-holder/page-holder.component';
import { HeaderBarComponent } from '../header/header-bar/header-bar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [HeaderBarComponent, PageHolderComponent]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

}
