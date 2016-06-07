import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UpdateActivitiesComponent } from './update-activities.component';

describe('Component: UpdateActivities', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UpdateActivitiesComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UpdateActivitiesComponent],
      (component: UpdateActivitiesComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UpdateActivitiesComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UpdateActivitiesComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-update-activities></app-update-activities>
  `,
  directives: [UpdateActivitiesComponent]
})
class UpdateActivitiesComponentTestController {
}

