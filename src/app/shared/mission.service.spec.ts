import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MissionService } from './mission.service';

describe('Mission Service', () => {
  beforeEachProviders(() => [MissionService]);

  it('should ...',
      inject([MissionService], (service: MissionService) => {
    expect(service).toBeTruthy();
  }));
});
