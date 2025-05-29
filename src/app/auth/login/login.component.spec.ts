import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule, RouterTestingModule],
      providers: [
        {
          provide: Auth,
          useValue: {
            signInWithEmailAndPassword: () => Promise.resolve({})
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should mark form invalid if fields are empty', () => {
    component.login();
    expect(component.form.invalid).toBeTrue();
  });
});
