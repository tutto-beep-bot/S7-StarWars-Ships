import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: Auth, useValue: {} }
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});