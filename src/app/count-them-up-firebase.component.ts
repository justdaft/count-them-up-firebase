import { Component } from '@angular/core';
import { PeopleComponent } from './+people';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { ActivitiesComponent } from './+activities';
import { DashboardComponent } from './+dashboard';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'count-them-up-firebase-app',
  templateUrl: 'count-them-up-firebase.component.html',
  styleUrls: ['count-them-up-firebase.component.css'],
  directives: [ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdCheckbox,
    MdRadioButton,
    MdSpinner,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdProgressBar,
    MdIcon
  ],
  providers: [ROUTER_PROVIDERS, MdRadioDispatcher, MdIconRegistry]
})
@Routes([
  { path: '/people', component: PeopleComponent },
  { path: '/activities', component: ActivitiesComponent },
  { path: '/dashboard', component: DashboardComponent }
])
export class CountThemUpFirebaseAppComponent {
  title = 'count-them-up-firebase works!';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }

}


