import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IApartment } from './../../../assets/data/apartment';
import { ApartmentService } from '../../service/apartment.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent implements OnInit {
  errorMessege = '';
  apartment: IApartment;
  private _url = '/assets/data/apartments.json';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apartmentService: ApartmentService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getApartment(id);
    }
  }

  getApartment(id: number): void {
    this.apartmentService.getApartment(id).subscribe({
      next: (apartment) => (this.apartment = apartment),
      error: (err) => (this.errorMessege = err),
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  call() {}
  messege() {}
  mail() {}
}
