import { Component } from '@angular/core';
import { PeopleComponent } from './+people';
import { Routes, Router , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { ActivitiesComponent } from './+activities';
import { DashboardComponent } from './+dashboard';

@Component({
  moduleId: module.id,
  selector: 'count-them-up-firebase-app',
  templateUrl: 'count-them-up-firebase.component.html',
  styleUrls: ['count-them-up-firebase.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/people', component: PeopleComponent},
  {path: '/activities', component: ActivitiesComponent},
  {path: '/dashboard', component: DashboardComponent}
])
export class CountThemUpFirebaseAppComponent {
  title = 'count-them-up-firebase works!';
 
  constructor(private router: Router) { }

 ngOnInit() {
   this.router.navigate(['/dashboard']);
 }

}


