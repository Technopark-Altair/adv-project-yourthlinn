import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/car';

@Component({
  selector: 'add-new-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  car: Car;
  @Output() addedCar = new EventEmitter<Car>();
  constructor() {}
  ngOnInit(): void {
    this.car = new Car();
  }

  addCarInCarsComponent() {
    this.addedCar.emit(this.car);
    this.car = new Car();
  }
}
