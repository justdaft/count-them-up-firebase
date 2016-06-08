import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivitiesComponent } from '../+activities';
import { PeopleComponent } from '../+people';


import {MdButton} from '@angular2-material/button/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdIcon} from '@angular2-material/icon/icon';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    ActivitiesComponent,
PeopleComponent
  ],
})
@Routes([
  { path: '/people', component: PeopleComponent },
  { path: '/activities', component: ActivitiesComponent },
  { path: '/dashboard', component: DashboardComponent }
])
export class DashboardComponent {
  constructor(private router: Router) {
  }

  announce() {
    // let mission = this.missions[this.nextMission++];
    // this.missionService.announceMission(mission);
    // this.history.push(`Mission "${mission}" announced`);
    // if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
