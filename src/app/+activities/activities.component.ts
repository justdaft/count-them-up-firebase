import { Component, Input, OnDestroy } from '@angular/core';
import { BackendService, IPerson} from '../shared';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subscription }   from 'rxjs/Subscription';
import * as moment from 'moment';

import {
  OnActivate
} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-activities',
  templateUrl: 'activities.component.html',
  styleUrls: ['activities.component.css']
})
export class ActivitiesComponent {
  activities$: FirebaseListObservable<any[]>;
  	startOfWeek = moment().startOf('isoWeek').format('DDMMYYYY');

  // @Input() person: IPerson;
  person: IPerson;
  activities: any = `<no activities>`;
  confirmed = false;
  announced = false;
  subscription: Subscription;

  // this.history.push(`Mission "${mission}" announced`);

  constructor(private backendService: BackendService, public af: AngularFire) {
    this.subscription = backendService.selectedPersonAnnounced$.subscribe(
      person => {
        this.person = person;
        let path = `/activities/${person.name}/${this.startOfWeek}`;
        this.activities$ = this.af.database.list(path);
        this.announced = true;
        this.confirmed = false;
      })
  }

  confirm() {
    this.confirmed = true;
    this.backendService.confirmSelectedPerson(this.person);
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  // constructor(private backend: BackendService) {
  //   // this.activities$ = this.backend.currentActivities();
  //   this.activities$ = this.backend.filteredActivities();
  // }

  // routerOnActivate() {
  //   this.activities$ = this.backend.filteredActivities();
  //   this.activities$ = this.backend.currentActivities();
  // }

  // ngOnInit() {
  // this.activities$ = this.backend.filteredActivities();
  // }

}
