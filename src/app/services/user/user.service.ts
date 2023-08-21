import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login.interface';
import { User, UserLogin } from 'src/app/models/user.interface';

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

  public getUserInformation(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }
}
