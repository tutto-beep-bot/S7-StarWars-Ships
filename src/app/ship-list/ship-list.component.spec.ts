import { TestBed } from '@angular/core/testing';
import { ShipListComponent } from './ship-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShipListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'star-wars-ships' title`, () => {
    const fixture = TestBed.createComponent(ShipListComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('star-wars-ships');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShipListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, star-wars-ships');
  });
});
