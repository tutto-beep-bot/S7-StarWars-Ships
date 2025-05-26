import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLoggedIn = false;

  constructor(private router: Router, private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.isLoggedIn = !!user;
    });
  }

  onStartClick(){
    if(this.isLoggedIn) {
      this.router.navigate(['/starships']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
