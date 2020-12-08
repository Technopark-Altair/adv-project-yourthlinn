import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/car-service.service';
import { Car } from 'src/app/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private cs: CarService, private route: ActivatedRoute) {}
  car: Car;
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = +data.id;
      this.car = this.cs.getcar(this.id);
    }
    ); }
}
