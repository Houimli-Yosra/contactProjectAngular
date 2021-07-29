import { TestBed } from '@angular/core/testing';

import { EventDeiverServiceService } from './event-deiver-service.service';

describe('EventDeiverServiceService', () => {
  let service: EventDeiverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDeiverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
