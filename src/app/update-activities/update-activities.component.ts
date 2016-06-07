import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';

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
	selector: 'app-update-activities',
	templateUrl: 'update-activities.component.html',
	styleUrls: ['update-activities.component.css'],
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
export class UpdateActivitiesComponent implements OnInit, OnChanges {
	@Input() resultsArray: any;
	@Output() valueChange = new EventEmitter();

	colors: Array<string> = ['red', 'blue', 'green', 'orange', 'pink', 'gold', 'purple', 'grey'];

	constructor() {
		//
	};

	ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
		//
		// console.log(this.resultsArray);
	};

	ngOnInit() {
		//
	};

	updateActivity(activity: string, value: number) {
		this.valueChange.emit({
			activity: activity,
			value: value
		});
	};

}
