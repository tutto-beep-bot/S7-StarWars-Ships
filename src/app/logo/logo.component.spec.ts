import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User } from '@angular/fire/auth';
import { LogoComponent } from './logo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let mockAuth: jasmine.SpyObj<Auth>;
  let mockRouter: jasmine.SpyObj<Router>;
  const mockUser = { uid: '123', email: 'test@example.com' } as User;

  beforeEach(async () => {
    mockAuth = jasmine.createSpyObj('Auth', ['signOut']);
    mockAuth.signOut.and.returnValue(Promise.resolve());


    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        LogoComponent,
        RouterTestingModule.withRoutes([]) 
      ],
      providers: [
        { provide: Auth,   useValue: mockAuth },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    component.user = signal<User | null>(mockUser);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signOut and navigate on logout', async () => {
    await component.logout();
    expect(mockAuth.signOut).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
