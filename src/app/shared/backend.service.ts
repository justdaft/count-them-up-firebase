import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IActivityItem, ITypeItem, IPerson } from './models';
import { Person } from './person';
import { Activity } from './activity';
import { TypeItem } from './type-item';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BackendService {
	activityItems$: FirebaseListObservable<IActivityItem[]>;
	people$: FirebaseListObservable<IPerson[]>;
	nameSubject: BehaviorSubject<any>;

	constructor(public af: AngularFire) {
		this.activityItems$ = af.list(`/activities`) as FirebaseListObservable<IActivityItem[]>;
		this.people$ = af.list(`/people`) as FirebaseListObservable<IPerson[]>;
		this.nameSubject = new BehaviorSubject('Amy');
		this.nameSubject.subscribe(x => console.log(x));
	}

	selectedPersonName(name: string) {
		this.nameSubject.next(name);
	};


	createPerson(person: IPerson): Promise<any> {
		return this.af.database.list(`/activities`).push(new Person(person));
	}

	createActivity(name: string, result: boolean, type: string): Promise<any> {
		let path = `/activities/` + name + `/` + type;
		return this.af.database.list(path).push(new 
			Activity(type, result));
		// return this.activityItems$.push(new Activity(name, title, result));
	}

	createTypeItem(type: string): Promise<any> {
		let path = `/activity-types/` + type;
		return this.af.database.list(path).push(new TypeItem(type));
	}

	removeActivity(name: string, key: string, type: string): Promise<any> {
		let path = `/activities/` + name + `/` + type;
		return this.af.database.list(path).remove(key);
	}

	updateTotals(name: string, total: number) {
		let ref = new Firebase(`https://count-them-up.firebaseio.com/people/` + name + `/total`);
		// ref.transaction(x => x + change);
		ref.transaction(function (current) {
			// Increment readCount by 1, or set to 1 if it was undefined before.
			return current = total;
		});
	}

	updateActivity(path, change: number) {
		// let path = `/activities/` + name + `/` + startOfWeek + `/` + activity;
		let ref = new Firebase(`https://count-them-up.firebaseio.com/` + path);
		// ref.transaction(x => x + change);
		ref.transaction(function (current) {
			// Increment readCount by 1, or set to 1 if it was undefined before.
			return (current || 0) + change;
		});
	}

	//   updateActivity(name: string, activity: string, startOfWeek: string, change: number) {
	//   let path = `/activities/` + name + `/` + startOfWeek + `/` + activity;
	//   let ref = new Firebase(`https://count-them-up.firebaseio.com/` + path);
	//   ref.transaction(x => x + change);
	// }

}
