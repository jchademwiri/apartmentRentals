import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../../service/apartment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  title = 'Apartment Rentals';

  constructor(private _apartmentService: ApartmentService, private router: Router) { }

  public apartments = [];

  ngOnInit(): void {
    this._apartmentService.getApartments()
      .subscribe(
        data => this.apartments = data
      );
  }

  call() {
    console.log('You just called the owner...');
    console.log('waiting for the call...');

  }
  messege() {
    console.log('You just messeged the owner...');
    console.log('messege sent');
  }
  mail() {
    console.log('Email sent');
  }
  apartmentDetails(apartment) {
    console.log('Clicked');
    this.router.navigate(['/apartment', apartment.apartmentId]);
  }
}
