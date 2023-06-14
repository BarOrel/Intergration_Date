/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateConverterService } from './DateConverter.service';

describe('Service: DateConverter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateConverterService]
    });
  });

  it('should ...', inject([DateConverterService], (service: DateConverterService) => {
    expect(service).toBeTruthy();
  }));
});
