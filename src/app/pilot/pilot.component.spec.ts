import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotComponent } from './pilot.component';

describe('PilotsComponent', () => {
  let component: PilotComponent;
  let fixture: ComponentFixture<PilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PilotComponent);
    component = fixture.componentInstance;
    
    component.pilot = { 
      name: 'Luke Skywalker',
    };
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
