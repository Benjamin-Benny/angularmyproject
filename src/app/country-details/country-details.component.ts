import { Component, OnInit } from '@angular/core';
import { ApicountryService } from '../apicountry.service';
import { ActivatedRoute } from '@angular/router';
import { CountryDetails } from '../countrydetails';
import {formatDate} from '@angular/common';
import { DatePipe } from '@angular/common';
import {Dates} from '../dates';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
  providers: [DatePipe]
})
export class CountryDetailsComponent implements OnInit {
  title = "Countrydetails";
  countrydetails: CountryDetails;
  countrydetails1: CountryDetails;
  country1: CountryDetails;
  country: string;
  toDay: Dates;
  fromDay: Dates;
  myDate: Date;
  totalCases: number;
  date: string;
  date1: string;

  constructor(
    private apicountryService: ApicountryService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
    ){
      this.toDay = new Dates();
      this.fromDay = new Dates();
      this.myDate = new Date(Date.parse(Date()));
      this.toDay.month = (this.myDate.getMonth()+1).toString();
      this.toDay.day = this.myDate.getDate().toString();
      this.fromDay.day = (this.myDate.getDate()-10).toString();
      this.toDay.year = this.myDate.getFullYear().toString();
      this.date = this.toDay.year +"-"+ this.toDay.month +"-"+ this.toDay.day + this.toDay.time;
      this.date1 = this.toDay.year +"-"+ this.toDay.month +"-"+ this.fromDay.day + this.toDay.time;
      console.log(this.date);
      console.log(this.date1);
      
  }
  ngOnInit(){
    this.country = this.route.snapshot.paramMap.get('country');
    this.apicountryService.getcountrydetails(this.country)
    .subscribe(country => this.countrydetails=this.getCases(this.date as string, country as CountryDetails[]));
    this.apicountryService.getcountrydetails(this.country)
    .subscribe(country => this.countrydetails1=this.getCases(this.date1 as string, country as CountryDetails[]));
    
  }

  getCases(date: string, country: CountryDetails[]): CountryDetails{
      for(let i=0; i<country.length; i++){
        this.country1 = country[i]; 
        console.log((this.country1.Date)); 
        if(this.country1.Date==date){
          return this.country1;
        }
      }
        return country[country.length-1];
    }
}
  
