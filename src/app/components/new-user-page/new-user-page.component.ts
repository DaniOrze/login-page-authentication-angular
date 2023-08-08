import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.css']
})
export class NewUserPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  public newUserForm!: FormGroup;

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
  }

}
