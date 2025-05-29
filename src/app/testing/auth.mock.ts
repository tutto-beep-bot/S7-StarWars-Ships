export class MockAuthService {
  isLoggedIn = jasmine.createSpy('isLoggedIn').and.returnValue(false);
  login = jasmine.createSpy('login');
  logout = jasmine.createSpy('logout');
  getCurrentUser = jasmine.createSpy('getCurrentUser');
}