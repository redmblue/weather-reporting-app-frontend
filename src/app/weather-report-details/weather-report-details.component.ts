import { Component, OnInit } from '@angular/core';
import {Weather_Report, weather_reports, WeatherReports} from "../weatherreports";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {WeathergenComponent} from "../weathergen/weathergen.component";
import { Router } from '@angular/router';
//FOR EDIT - JUST PRE FILL CREATE. SO MAKE AN ADD/EDIT ONE. ONLY DIFF IS IN EDIT MAKE TIMESTAMP A <p> INSTEAD OF A TEXTBOX.
//use material ui.
@Component({
  selector: 'app-weather-report-details',
  templateUrl: './weather-report-details.component.html',
  styleUrls: ['./weather-report-details.component.css']
})
export class WeatherReportDetailsComponent implements OnInit{
  weather_report: Weather_Report|undefined;
  constructor(
    private route: ActivatedRoute,private http: HttpClient, private router:Router) { }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const WeatherReportTimestamp:string|null = routeParams.get('WeatherReportTimestamp'); //can use Number() to convert to number, but this is timestamp
    //not number.

    this.weather_report = WeatherReports.data.find(wxreport => wxreport.timestamp===WeatherReportTimestamp);
  }
  async deleteItem(weather_report:Weather_Report){
    //window.alert("deleting " + weather_report.city);
    this.http.delete(`http://weatherreportapitodeploy20230531141202.azurewebsites.net/api/WeatherReport/delete/${weather_report.timestamp}`).subscribe(
      ()=>{
        window.alert(`Deleted report with timestamp ${weather_report.timestamp}`);

        WeatherReports.refresh(this.http);//how do I route back?
        this.router.navigateByUrl("/");
      },
      (error) => {
        window.alert('Error deleting report:'+JSON.stringify(error));
      }
    );
  }
}
