import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';

const routes: Routes = [
  {path: '', component: UserListPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: NewUserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
