import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ])

  usernameFormControl = new FormControl('', [
    Validators.required
  ])

  passwordFormControl = new FormControl('', [
    Validators.required
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
