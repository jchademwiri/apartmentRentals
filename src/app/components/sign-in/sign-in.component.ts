import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide = true;

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
