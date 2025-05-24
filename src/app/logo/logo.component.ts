import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Auth, authState, signOut, User } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-logo',
  imports: [RouterModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
	private auth = inject(Auth);
	private router = inject(Router);
	user = toSignal<User | null>(authState(this.auth), { initialValue: null });

  	logout() {
    	signOut(this.auth)
      		.then(() => this.router.navigate(['/login']))
      		.catch(err => console.error('Logout failed', err));
  	}
}
