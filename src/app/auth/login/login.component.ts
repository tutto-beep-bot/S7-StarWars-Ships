import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;
    

  constructor(private fb: NonNullableFormBuilder, private afAuth: AngularFireAuth, private router: Router) {
    this.form = this.fb.group({
      email: this.fb.control ('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
  });
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();

      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['/starships'])
        })
        .catch((error) => {
          alert('Wrong data')
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
