import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipListComponent } from './ship-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StarshipService } from '../services/starship.service';

describe('ShipListComponent', () => {
let fixture!: ComponentFixture<ShipListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipListComponent, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: StarshipService,
          useValue: {
            ships: () => []  
          }
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ShipListComponent);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShipListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
