import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersStoreService } from 'src/app/store/users-store.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userStore: UsersStoreService,
  ) {}

  public loginForm!: FormGroup;
  public showPassword = false;

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public submitForm(): void {
    this.userStore.setFormLogin(this.loginForm.value);
  }

  public passwordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
