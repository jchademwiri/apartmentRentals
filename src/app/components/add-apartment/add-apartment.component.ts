import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
})
export class AddApartmentComponent implements OnInit {
  constructor() {}

  addressFormControl = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {}
}
