import { Injectable } from '@angular/core';
import { Car } from 'src/app/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Array<Car> = [
    {id: 0, brandName: 'Kia', modelName: 'Rio X', priceInRub: 1239900},
    {id: 1, brandName: 'Land Rover', modelName: 'Defender', priceInRub: 6892000},
    {id: 2, brandName: 'Peugeot', modelName: '3008', priceInRub: 2629000},
    {id: 3, brandName: 'Audi', modelName: 'A4 Avant', priceInRub: 3445000},
    {id: 4, brandName: 'Toyota', modelName: 'Land Cruiser Prado', priceInRub: 4933000},
    {id: 5, brandName: 'Volkswagen', modelName: 'Polo', priceInRub: 1284900}
  ];
  constructor() { }
  // tslint:disable-next-line: typedef
  getcars() {
    return this.cars;
  }
  // tslint:disable-next-line: typedef
  getcar(id: number) {
    return this.cars[id];
  }
}
