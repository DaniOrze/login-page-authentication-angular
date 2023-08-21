import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    const ignoredRoutes = ['/login', '/signup'];

    if (ignoredRoutes.some(route => this.router.url.includes(route))) {
      return next.handle(request);
    }

    if (!token) {
      if (request.url.includes('/login')) {
        return next.handle(request);
      }
      this.router.navigate(['/login']);
      this.snackbarService.showSnackbarError('Access denied!');
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(request);
  }
}
