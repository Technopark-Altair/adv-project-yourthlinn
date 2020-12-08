import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  constructor(private cs: CarService) { }
  allcars = this.cs.getcars();
  ngOnInit(): void {
  }
}
