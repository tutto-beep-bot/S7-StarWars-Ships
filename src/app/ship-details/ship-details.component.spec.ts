import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ShipDetailsComponent } from './ship-details.component';
import { StarshipService } from '../services/starship.service';
import { of } from 'rxjs';
import { StarShip } from '../services/starship.service';

describe('ShipDetailsComponent', () => {
  let component: ShipDetailsComponent;
  let fixture: ComponentFixture<ShipDetailsComponent>;

  beforeEach(async () => {
    const mockActivatedRoute = {
      snapshot: { paramMap: { get: (_: string) => '42' } }
    };

    const mockStarship: StarShip = {
      name: 'X-Wing',
      model: 'T-65',
      url: 'https://swapi.dev/api/starships/12/',
      manufacturer: 'Incom Corporation',
      cost_in_credits: '149999',
      length: '12.5',
      max_atmosphering_speed: '1050',
      crew: '1',
      pilots: [
        'https://swapi.py4e.com/api/people/1/',
        'https://swapi.py4e.com/api/people/9/'
      ],
      
    };

     const mockStarshipService = {
      getStarshipId: (id: string) => of(mockStarship),
      getPilot: (url: string) => of({ name: 'Luke Skywalker' }),
      getMoviesForShip: (url: string) => of(['A New Hope', 'The Empire Strikes Back'])
    };

    await TestBed.configureTestingModule({
      imports: [ShipDetailsComponent], 
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: StarshipService, useValue: mockStarshipService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});