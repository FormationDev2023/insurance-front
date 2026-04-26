import { TestBed } from '@angular/core/testing';

import { SinistreService } from './sinistreService';

describe('Sinistre', () => {
  let service: SinistreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinistreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
