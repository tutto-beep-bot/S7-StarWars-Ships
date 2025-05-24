import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, NonNullableFormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form!: FormGroup;

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
    const { email, password } = this.form.getRawValue();
    createUserWithEmailAndPassword(this.afAuth, email, password)
      .then(() => this.router.navigate(['/starships']))
      .catch(err => {
			console.error('Firebase sign-up error:', err);
  			alert('Registration failed: ' + err.message);
		});
  }
}
