import { TestBed } from '@angular/core/testing';

import { RestaurantFavesService } from './restaurant-faves.service';

describe('RestaurantFavesService', () => {
  let service: RestaurantFavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantFavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
