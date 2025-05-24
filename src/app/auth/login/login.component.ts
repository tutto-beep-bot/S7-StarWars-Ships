import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;
  
    

  constructor(private fb: NonNullableFormBuilder, private afAuth: Auth, private router: Router) {}



  ngOnInit() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required)
    });
  };

  login() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    const { email, password } = this.form.getRawValue();
    signInWithEmailAndPassword(this.afAuth, email, password)
      .then(() => this.router.navigate(['/starships']))
      .catch(() => alert('Wrong credentials'));
  }
}
