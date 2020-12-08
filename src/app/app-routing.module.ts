import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from 'src/app/car/car.component';
import { CarsListComponent } from 'src/app/cars-list/cars-list.component';
import { PageNotFoundComponent } from 'src/app/notfound.component';


const routes: Routes = [
  { path: '', component: CarsListComponent},
  { path: 'car/:id', component: CarComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
