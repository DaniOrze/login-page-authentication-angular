import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.interface';
import { Observable } from 'rxjs';
import { User, UserLogin } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public login(body: Login): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:3000/login', body);
  }

  public newUser(body: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', body);
  }
}
