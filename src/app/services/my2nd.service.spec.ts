/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { My2ndService } from './my2nd.service';

describe('My2ndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [My2ndService]
    });
  });

  it('should ...', inject([My2ndService], (service: My2ndService) => {
    expect(service).toBeTruthy();
  }));
});
