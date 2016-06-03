import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CountThemUpFirebaseAppComponent } from '../app/count-them-up-firebase.component';

beforeEachProviders(() => [CountThemUpFirebaseAppComponent]);

describe('App: CountThemUpFirebase', () => {
  it('should create the app',
      inject([CountThemUpFirebaseAppComponent], (app: CountThemUpFirebaseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'count-them-up-firebase works!\'',
      inject([CountThemUpFirebaseAppComponent], (app: CountThemUpFirebaseAppComponent) => {
    expect(app.title).toEqual('count-them-up-firebase works!');
  }));
});
