/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroesSearchService } from './heroes-search.service';

describe('HeroesSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesSearchService]
    });
  });

  it('should ...', inject([HeroesSearchService], (service: HeroesSearchService) => {
    expect(service).toBeTruthy();
  }));
});
