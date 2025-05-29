import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { StarshipService } from '../../services/starship.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent, HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        StarshipService,
        {
          provide: Auth,        
          useValue: {
            createUserWithEmailAndPassword: () => Promise.resolve({})
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the register component', () => {
    expect(component).toBeTruthy();
  });

  it('should show mismatch error when passwords don’t match', () => {
    component.form.setValue({
      email: 'test@example.com',
      password: '123456',
      confirmPassword: 'notthesame'
    });

    expect(component.form.errors).toEqual({ mismatch: true });
  });

  it('should allow form submission if valid', () => {
    component.form.setValue({
      email: 'test@example.com',
      password: '123456',
      confirmPassword: '123456'
    });

    expect(component.form.valid).toBeTrue();
  });
});
