import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, NonNullableFormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form!: FormGroup;
  isSubmitting = false;

  constructor(private fb: NonNullableFormBuilder, private afAuth: Auth, private router: Router) {}

  ngOnInit() {
    this.form= this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: this.fb.control('', Validators.required)
    }, { 
      validators: this.passwordsMatch
    });
  }

  private passwordsMatch(control: AbstractControl): ValidationErrors | null {
      const password        = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword
        ? null
        : { mismatch: true};
  }

  register(){
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
	this.isSubmitting = true;
    const { email, password } = this.form.getRawValue();

	console.log('Attempting to register with:', { email, password });
	
    createUserWithEmailAndPassword(this.afAuth, email, password)
		.then((userCredential) => {
			console.log('Successfully registered:', userCredential.user);
			this.router.navigate(['/starships'])
  		})
      	.catch(err => {
			console.error('Firebase sign-up error:', err);
  			let errorMessage = 'Registration failed';
  			if (err.code === 'auth/email-already-in-use') {
    			errorMessage = 'This email is already registered';
  			} else if (err.code === 'auth/invalid-email') {
    			errorMessage = 'Please enter a valid email address';
  			}
  			alert(errorMessage);
		})
		.then(() => {
			this.isSubmitting = false
		});
  }
}
