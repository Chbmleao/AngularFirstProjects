import { TestBed } from '@angular/core/testing';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConverterService],
    });
    service = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
