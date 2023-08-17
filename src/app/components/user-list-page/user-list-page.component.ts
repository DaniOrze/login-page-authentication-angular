import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { UsersStoreService } from 'src/app/store/users-store.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = new Array<Subscription>();
  public userInformation!: User;

  constructor(private userService: UsersStoreService) {}

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe);
  }
  ngOnInit(): void {
    this.userService.getUserInformation();
    this.subscription.push(
      this.userService.userSubject.subscribe(value => {
        this.userInformation = value;
      }),
    );
  }

  public logout(): void {
    this.userService.logout();
  }
}
