import { Component,OnInit } from '@angular/core';
import { weather_reports} from "../weatherreports";
import {HttpClient} from "@angular/common/http";
import {Weather_Report, WeatherReports} from "../weatherreports";

//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weathergen',
  templateUrl: './weathergen.component.html',
  styleUrls: ['./weathergen.component.css'],
})
export class WeathergenComponent implements OnInit{ //ngOnInit or constructor refresh???
  //weather_reports:Weather_Report[]= [...weather_reports];
  weather_reports:Weather_Report[]=[...WeatherReports.data];
  loading=false;

  constructor(private http: HttpClient) {}
  async ngOnInit() {
    await this.refresh();
    /*
    this.loading=true;
    await WeatherReports.refresh(this.http);
    this.loading=false;*/
  }

  async refresh() {
    this.loading=true;
    await WeatherReports.refresh(this.http);
    this.weather_reports = WeatherReports.data;
    this.loading=false;
  }
  getSeverityClass(severity: number): string {
    /*
    if (severity <= 3) {
      return 'bg-blue-500 text-white'; // Blue background and white text for severity 1-3
    } else if (severity <= 7) {
      return 'bg-purple-500 text-white'; // Purple background and white text for severity 4-7
    } else {
      return 'bg-red-500 text-white'; // Red background and white text for severity 8-10
    }*/
    if (severity <= 3) {
      return 'green'; //blue - lightblue
    } else if (severity <= 7) {
      return 'orange'; //purple - lavender
    } else {
      return 'red'; //red - lightcoral
    }
  }
  /*
  async refresh(){
    try {
      const response = await this.http.get<Weather_Report[]>('http://localhost:5030/api/WeatherReport').toPromise();

      //this.weather_reports = response??[];
      window.alert(response);
    } catch (error) {
      window.alert('Error refreshing data:'+ error);
    }
  }*/
/*
  async refresh() {
    try {
      const apiUrl = 'http://localhost:5030/api/WeatherReport';

      const response = await this.http.get<any[]>(apiUrl).toPromise();
      console.log(response);

      // Process the response array as needed
      // ...

      // Assign the response array to your component property
      //this.weather_reports = response;
      window.alert(response);

      // Display a success message or perform additional actions
      console.log(`The prompt has been refreshed. There are now ${this.weather_reports.length} weather reports`);
    } catch (error) {
      console.error('Error refreshing data:', error);
      window.alert("ERROR"+error);
      // Handle error and display an error message if necessary
    }
  }*/
}
