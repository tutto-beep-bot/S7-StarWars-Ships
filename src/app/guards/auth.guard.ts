// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { map, take } from 'rxjs/operators';

// export const authGuard: CanActivateFn = (route, state) => {
//     const afAuth = inject(AngularFireAuth);
//     const router = inject(Router);

//     return afAuth.authState.pipe(
//       take(1),
//       map(user => {
//         if (!!user) {
//           return true;
//         } else {
//           router.navigate(['/login']);
//           return false;
//       }
//     })
//   );
// };
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map, take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	constructor(
    private auth: Auth,
    private router: Router
  ) {}

  canActivate() {
    return authState(this.auth).pipe(
      take(1),
      map(u => !!u),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
