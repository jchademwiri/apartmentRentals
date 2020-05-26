import { Component, OnInit } from '@angular/core';
import { Apartment } from "./apartment";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  title = 'Apartment Rentals Manicaland';

  constructor() { }

  ngOnInit(): void {
  }

  location = 'Chikanga'
  call() {
    console.log('You just called the owner...')
    console.log('waiting for the call...')

  }
  messege() {
    console.log('You just messeged the owner...')
    console.log('messege sent')
  }
  mail() {
    console.log('Email sent')
  }

  // appartment = {
  //   image: 'https://source.unsplash.com/400x200/?house',
  //   description: 'A laxuary home in mutare/chikanga. a good place for a family.',
  //   rooms: 3,
  //   phone: '555 - 555 - 555',
  //   email: 'myemail@email.com',
  //   address: '123 Chikanga phase 2'
  // }


  apartments = [
    new Apartment('https://source.unsplash.com/400x200/?room',
      'A laxuary home in mutare/chikanga. a good place for a family.',
      3,
      90,
      'John Doe',
      '555-555-555',
      'mail@email.com',
      '145 New dangare, Sakubva'),

    new Apartment('https://source.unsplash.com/400x200/?outside',
      'A laxuary home in mutare/chikanga. a good place for a family.',
      5,
      150,
      'Mary Moose',
      '555-555-555',
      'mail@email.com',
      '123 Sakubva 2'),

    new Apartment('https://source.unsplash.com/400x200/?house',
      'A laxuary home in mutare/chikanga. a good place for a family.',
      2,
      50,
      'Ryne Widzo',
      '555-555-555',
      'mail@email.com',
      '123 Murambi')

    // ,
    // new Apartment('../../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg',
    //   'A laxuary home in mutare/chikanga. a good place for a family.',
    //   2,
    //   50,
    //   'Ryne Widzo',
    //   '555-555-555',
    //   'mail@email.com',
    //   '123 Murambi')
  ];

  myApartment = this.apartments[0];

}
