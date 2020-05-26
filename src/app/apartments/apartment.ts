import { Url } from 'url';

export class Apartment {
  constructor(
    public image: string,
    public description: string,
    public rooms: number,
    public price: number,
    public name: string,
    public phone: string,
    public email: string,
    public address: string
  ) { }
}
