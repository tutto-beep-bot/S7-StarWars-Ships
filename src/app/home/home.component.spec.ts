
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Auth } from '@angular/fire/auth';

class MockAuthService {
  currentUser = { uid: 'test123' };
  onAuthStateChanged(callback: (user: any) => void) {
    callback(this.currentUser);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockAuthService: MockAuthService;

  beforeEach(async () => {
    mockAuthService = new MockAuthService();

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: Auth, useValue: new MockAuthService() }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});