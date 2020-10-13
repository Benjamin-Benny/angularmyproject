import { Component, OnInit } from '@angular/core';
import {ApicountryService} from 'src/app/apicountry.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  title = "Countries List";
  countries: any;
  constructor(private apicountryService: ApicountryService){}
  
  ngOnInit(){
    this.apicountryService.getapicountry()
    .subscribe(country => this.countries=JSON.parse(JSON.stringify(country)));
  }
}
