import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApartmentService } from '../../service/apartment.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  title = 'Apartment Details';
  public apartmentId;

  constructor(private _apartmentService: ApartmentService, private route: ActivatedRoute, private router: Router) { }

  public apartments = [];

  ngOnInit(): void {
    this._apartmentService.getApartments().subscribe(data => this.apartments = data);

    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.apartmentId = id

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.apartmentId = id;
    });

  }
  goPrevious() {
    const previousId = this.apartmentId - 1;
    this.router.navigate(['/apartment', previousId]);
  }
  goNext() {
    const nextId = this.apartmentId + 1;
    this.router.navigate(['/apartment', nextId]);
  }
}
