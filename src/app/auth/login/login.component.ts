import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
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
  returnUrl: string = '/';
    

  constructor(private fb: NonNullableFormBuilder, private afAuth: Auth, private router: Router, private route: ActivatedRoute) {}



  ngOnInit() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required)
    });

    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  };

  login() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    const { email, password } = this.form.getRawValue();
    signInWithEmailAndPassword(this.afAuth, email, password)
      .then(() => this.router.navigateByUrl(this.returnUrl))
      .catch(() => alert('Wrong credentials'));
  }
}
