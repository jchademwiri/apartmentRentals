import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IApartment } from '../../assets/data/apartment';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  private _url = '/assets/data/apartments.json';

  constructor(private http: HttpClient) {}

  getApartments(): Observable<IApartment[]> {
    return this.http
      .get<IApartment[]>(this._url)
      .pipe(catchError(this.handleError));
  }

  // getApartment(id: number): Observable<any> {
  //   this.getApartment(id).pipe();
  //   return this.http.get<IApartment[]>(this._url);
  // }

  getApartment(id: number): Observable<IApartment> {
    return this.getApartments().pipe(
      map((products: any) => products.find((p) => p.apartmentId === id))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
