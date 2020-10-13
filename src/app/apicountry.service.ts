import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApicountryService {
  url1 = 'https://api.covid19api.com/countries';
  url2 = 'https://api.covid19api.com/country/';
  url3 = '/status/confirmed';
 
  constructor(private http: HttpClient) { }
  getapicountry(){
    return this.http.get(this.url1);
  }
  getcountrydetails(name: string){
    return this.http.get(this.url2+name+this.url3);
  }
}
