import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, filter } from 'rxjs';
import { Login } from '../models/login.interface';
import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UsersStoreService {
  private FormLoginSubject!: BehaviorSubject<Login>;
  private FormNewUserSubject!: BehaviorSubject<User>;
  private userInformation!: BehaviorSubject<User>;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {
    this.FormLoginSubject = new BehaviorSubject<Login>({} as Login);
    this.FormNewUserSubject = new BehaviorSubject<User>({} as User);
    this.userInformation = new BehaviorSubject<User>({} as User);

    this.initFormNewUser();
    this.initFormLogin();
  }

  private initFormLogin(): void {
    this.FormLoginSubject.pipe(
      debounceTime(500),
      filter(input => !!input.email),
    ).subscribe(formValue => {
      this.userService.login(formValue).subscribe({
        next: request => {
          this.snackbarService.showSnackbarSuccess('Login successful!');
          localStorage.setItem('token', request.accessToken);
          localStorage.setItem('id', JSON.stringify(request.user.id));
          this.router.navigate(['/list']);
        },
        error: err => {
          this.snackbarService.showSnackbarError('Email or password wrong!');
        },
      });
    });
  }

  private initFormNewUser(): void {
    this.FormNewUserSubject.pipe(
      debounceTime(500),
      filter(input => !!input.email),
    ).subscribe(formValue => {
      this.userService.newUser(formValue).subscribe({
        next: () => {
          this.snackbarService.showSnackbarSuccess('Signed up successfully!');
          this.router.navigate(['/login']);
        },
        error: err => {
          this.snackbarService.showSnackbarError('Email or password wrong!');
          this.router.navigate(['/signup']);
        },
      });
    });
  }

  public getUserInformation(): void {
    const id = Number(localStorage.getItem('id'));
    this.userService.getUserInformation(id).subscribe(value => {
      this.userInformation.next(value);
    });
  }

  get userSubject() {
    return this.userInformation.asObservable();
  }

  public setFormLogin(form: Login): void {
    this.FormLoginSubject.next(form);
  }

  public setFormNewUser(form: User): void {
    this.FormNewUserSubject.next(form);
  }

  public logout(): void {
    localStorage.clear();
    this.snackbarService.showSnackbarSuccess('Logouted successfully!');
    this.router.navigate(['/login']);
  }
}
