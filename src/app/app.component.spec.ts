import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { Auth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

class MockAuthService {
  currentUser = { uid: 'test123' };

  onAuthStateChanged(callback: (user: any) => void) {
    callback(this.currentUser);
    return () => {};
  }
}

const fakeRoute = { snapshot: { paramMap: { get: () => null } } };

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        { provide: Auth, useValue: new MockAuthService() },
        { provide: ActivatedRoute, useValue: fakeRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
