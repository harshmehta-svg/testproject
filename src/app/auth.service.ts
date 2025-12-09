import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) { }

  login(token: string): void {
    localStorage.setItem('auth_token', token);
    this.isAuthenticatedSubject.next(true);
    this.router.navigate(['/']); // Navigate to the home page or a protected route after login
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']); // Navigate to the login page after logout
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  private hasToken(): boolean {
    return !!this.getToken();