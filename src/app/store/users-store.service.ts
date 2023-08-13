import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, filter } from 'rxjs';
import { Login } from '../models/login.interface';
import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersStoreService {
  private FormLoginSubject!: BehaviorSubject<Login>;
  private FormNewUserSubject!: BehaviorSubject<User>;

  constructor(private userService: UserService) {
    this.FormLoginSubject = new BehaviorSubject<Login>({} as Login);
    this.FormNewUserSubject = new BehaviorSubject<User>({} as User);

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
          localStorage.setItem('token', request.accessToken);
          alert('Usuário logado');
        },
        error: err => {
          alert('Usuário não logado');
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
          alert('Usuário cadastrado');
        },
        error: err => {
          alert('Usuário não cadastrado');
        },
      });
    });
  }

  public setFormLogin(form: Login): void {
    this.FormLoginSubject.next(form);
  }

  public setFormNewUser(form: User): void {
    this.FormNewUserSubject.next(form);
  }
}
