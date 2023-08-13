import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersStoreService } from 'src/app/store/users-store.service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.css'],
})
export class NewUserPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userStore: UsersStoreService,
  ) {}

  public newUserForm!: FormGroup;
  public showPassword = false;

  ngOnInit(): void {
    this.createNewUserForm();
  }
  createNewUserForm(): void {
    this.newUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  public submitForm(): void {
    this.userStore.setFormNewUser(this.newUserForm.value);
  }

  public passwordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
