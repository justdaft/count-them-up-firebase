import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BackendService, IPerson} from '../shared';
import { PeopleComponent } from '../+people';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivitiesComponent } from '../+activities';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/people', component: PeopleComponent},
  {path: '/activities', component: ActivitiesComponent},
  {path: '/dashboard', component: DashboardComponent}
])
export class DashboardComponent implements OnInit {
	nameSubject: BehaviorSubject<any>;
	people$: FirebaseListObservable<any[]>;
	selectedPerson: IPerson;

  constructor(private router: Router, private backend: BackendService) {
  	this.people$ = backend.people$;
  }

  ngOnInit() {
  	this.nameSubject = new BehaviorSubject('Amy');
  }

 gotoDetail(person: IPerson) {
    // let link = [`/dashboard/activities`];
    this.backend.selectedPersonName(person.name);
     // let link = [`/activities/` + person.name, , { total: person.total }];
    // this.router.navigate([link]);
  }

}
	