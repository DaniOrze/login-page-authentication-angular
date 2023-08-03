import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NewUserPageComponent,
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
