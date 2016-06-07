import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CountThemUpFirebaseAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { BACKEND_PROVIDERS } from './app/shared';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(CountThemUpFirebaseAppComponent, [HTTP_PROVIDERS, 
	BACKEND_PROVIDERS,
	FIREBASE_PROVIDERS,
	defaultFirebase('https://count-them-up.firebaseio.com')
]);

