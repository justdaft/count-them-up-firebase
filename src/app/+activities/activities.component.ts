import { Component, Input, OnDestroy } from '@angular/core';
import { BackendService, IPerson} from '../shared';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subscription }   from 'rxjs/Subscription';

import * as moment from 'moment';
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
  selector: 'app-activities',
  templateUrl: 'activities.component.html',
  styleUrls: ['activities.component.css'],
  providers: [MdRadioDispatcher, MdIconRegistry],
  directives: [
    MD_CARD_DIRECTIVES,
    MdButton,
    MdCheckbox,
    MdRadioButton,
    MdSpinner,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdProgressBar,
    MdIcon
  ]
})
export class ActivitiesComponent {
  activities$: FirebaseListObservable<any[]>;
  startOfWeek = moment().startOf('isoWeek').format('DDMMYYYY');
  resultsArray: Array<any> = [];
  // @Input() person: IPerson;
  person: IPerson;
  activities: any = `<no activities>`;
  confirmed = false;
  announced = false;
  subscription: Subscription;
  // startOfWeek = moment().startOf('isoWeek').format('DDMMYYYY');
  thisWeek: string = `Week ` + moment().isoWeek() + ` of ` + moment().year();
  colors: Array<string> = ['red', 'blue', 'green', 'orange', 'pink', 'gold', 'purple', 'grey'];
  people$: FirebaseListObservable<any[]>;
  // this.history.push(`Mission "${mission}" announced`);
currentPerson: IPerson;

  constructor(private backendService: BackendService, public af: AngularFire) {
    this.people$ = backendService.people$;
    this.subscription = backendService.selectedPersonAnnounced$.subscribe(
      person => {
        this.person = person;
        this.currentPerson = person;
        let path = `/activities/${person.name}/${this.startOfWeek}`;
        this.activities$ = this.af.database.list(path);

        this.activities$.subscribe(x => {
          this.resultsArray = [];
          let tmpArray = [];
          let totals = 0;
          x.forEach(zz => {
            tmpArray.push(zz);
          });
          if (tmpArray.length > 0) {
            totals = tmpArray
              .map(function (b) { return b.$value; })
              .reduce(function (p, c) { return p + c; });
            // this.backendService.updateTotals(name, totals);
          }
          let obj = {
            week: this.thisWeek,
            results: tmpArray,
            total: totals
          };
          this.resultsArray.push(obj);
        });
        console.log('results: ', this.resultsArray)
        this.announced = true;
        this.confirmed = false;
      })
  }

  announcePersonSelected(person: IPerson) {
    this.backendService.announceSelectedPerson(person);
    // this.history.push(`Person "${person.name}" selected`);
    // if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  confirm() {
    this.confirmed = true;
    this.backendService.confirmSelectedPerson(this.person);
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
