import { AddApartmentComponent } from './components/add-apartment/add-apartment.component';
import { ApartmentDetailGuard } from './components/apartment-details/apartment-detail.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ErrorComponent } from './components/error/error.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ApartmentsComponent },
  {
    path: 'apartment/:id',
    canActivate: [ApartmentDetailGuard],
    component: ApartmentDetailsComponent,
  },
  { path: 'add-apartment', component: AddApartmentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AppComponent,
  ApartmentsComponent,
  ApartmentDetailsComponent,
  AboutComponent,
  SignUpComponent,
  SignInComponent,
  ContactComponent,
  ErrorComponent,
];
