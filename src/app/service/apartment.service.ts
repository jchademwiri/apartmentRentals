import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApartment } from '../../assets/data/apartment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  private _url = '/assets/data/apartments.json';

  constructor(private http: HttpClient) { }

  getApartments(): Observable<IApartment[]> {
    return this.http.get<IApartment[]>(this._url);
  }
}
