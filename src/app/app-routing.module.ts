import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryDetailsComponent} from './country-details/country-details.component';
import {CountriesListComponent} from './countries-list/countries-list.component';

const routes: Routes = [
  { path: 'Country/:country', component: CountryDetailsComponent },
  { path:'', redirectTo:'/countries', pathMatch: 'full'},
  { path:'countries', component: CountriesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
