import { TestBed } from '@angular/core/testing';

import { NgxSocketIoStreamService } from './ngx-socket-io-stream.service';

describe('NgxSocketIoStreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSocketIoStreamService = TestBed.get(NgxSocketIoStreamService);
    expect(service).toBeTruthy();
  });
});
