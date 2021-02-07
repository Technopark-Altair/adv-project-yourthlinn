import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/car-service.service';
import { Car } from 'src/app/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() carInput: Car;

  car: Car;
  constructor(private cs: CarService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let id: number = +data.id;
      this.car = this.cs.getcar(id);
    }
    ); }
}
