import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BackendService, IPerson} from '../shared';
import { PeopleComponent } from '../+people';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivitiesComponent } from '../+activities';
import { Subject }    from 'rxjs/Subject';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [ROUTER_DIRECTIVES, ActivitiesComponent],
  providers: [BackendService]
})
@Routes([
  { path: '/people', component: PeopleComponent },
  { path: '/activities', component: ActivitiesComponent },
  { path: '/dashboard', component: DashboardComponent }
])
export class DashboardComponent implements OnInit {
  // nameSubject: BehaviorSubject<any>;
  people$: FirebaseListObservable<any[]>;
  selectedPerson: IPerson;


  history: string[] = [];


  constructor(private router: Router, private backend: BackendService) {
    this.people$ = backend.people$;
      //   missionService.missionConfirmed$.subscribe(
      // astronaut => {
      //   this.history.push(`${astronaut} confirmed the mission`);
      // })
  }
  
    announce() {
    // let mission = this.missions[this.nextMission++];
    // this.missionService.announceMission(mission);
    // this.history.push(`Mission "${mission}" announced`);
    // if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
  
  
    announcePersonSelected(person: IPerson) {
    this.backend.announceSelectedPerson(person);
    this.history.push(`Person "${person.name}" selected`);
    // if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  ngOnInit() {
    // this.nameSubject = new BehaviorSubject('Amy');
  }

  gotoDetail(personName: string) {
    // let link = [`/dashboard/activities`];
    // this.backend.selectedPerson = personName;
    // this.backend.selectedPersonName(personName);
    // let link = [`/activities/` + personName, { name: personName }];
    // let link = [`/dashboard/activities/` + person.name];
    // this.router.navigate([link]);
  }

}
