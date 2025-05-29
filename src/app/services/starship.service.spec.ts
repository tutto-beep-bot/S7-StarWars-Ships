import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarshipService } from './starship.service';

describe('StarshipService', () => {
  let service: StarshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StarshipService]
    });
    service = TestBed.inject(StarshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});