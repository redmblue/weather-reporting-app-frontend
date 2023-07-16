import {Component, OnInit} from '@angular/core';
import {Weather_Report, weather_reports, WeatherReports} from "../weatherreports";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
@Component({
  selector: 'app-weather-report-add-edit',
  templateUrl: './weather-report-add-edit.component.html',
  styleUrls: ['./weather-report-add-edit.component.css']
})
export class WeatherReportAddEditComponent implements OnInit{
  weather_report: Weather_Report|undefined;
  add: boolean = false;
  formData: {time_stamp:string, city: string, zipCode: string, type_of_severe_weather: string, severity:string, notes:string } = {
    time_stamp:'2023-06-01T19:49:58.974Z',
    city: '',
    zipCode: '',
    type_of_severe_weather: '',
    severity: '',
    notes: ''
  }; //with notes- my suggestion is if blank when submit just set to null.
  constructor(
    private route: ActivatedRoute,private http: HttpClient, private router:Router) { }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const WeatherReportTimestamp:string|null = routeParams.get('WeatherReportTimestamp'); //can use Number() to convert to number, but this is timestamp
    //not number.
    if(WeatherReportTimestamp=="add"){
      this.weather_report=undefined;
      this.add=true;
    }
    else {
      this.weather_report = WeatherReports.data.find(wxreport => wxreport.timestamp === WeatherReportTimestamp);
      if(this.weather_report==undefined){
        window.alert("ERROR Timestamp not found.");
        //WeatherReports.refresh(this.http);//how do I route back? IDK IF NECESSARY. + might already do.
        //NEED TO DO Routing to this by adding a button under each thing. Might need to check stackblitz.
        //add a material form here. Add a nice image- probably tailwinds top bar
        this.router.navigateByUrl("/");
      }
      else{
        this.formData.time_stamp=this.weather_report.timestamp;
        this.formData.city= this.weather_report.city;
        this.formData.zipCode= this.weather_report.zipCode;
        this.formData.type_of_severe_weather= this.weather_report.type_Of_Severe_Weather;
        this.formData.severity= String(this.weather_report.severity); //add a verification function
        if (this.weather_report.notes != null) {
          this.formData.notes = this.weather_report.notes;
        }
      }
    }
  }
  async createReport(){
    //window.alert(JSON.stringify(this.formData));
    try {
      const url = 'http://weatherreportapitodeploy20230531141202.azurewebsites.net/api/WeatherReport/create'; // Replace with your API endpoint
      const currentTimestamp = new Date().toISOString();
      const reportData = {
        timestamp: currentTimestamp,
        city: this.formData.city,
        zipCode: this.formData.zipCode,
        type_Of_Severe_Weather: this.formData.type_of_severe_weather,
        severity: Number(parseInt(this.formData.severity, 10)), //may need to do some string parsing to remove the quotes
        notes: (this.formData.notes=='')?null:this.formData.notes
      };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const options = { headers: headers };
      let jsonData = JSON.stringify(reportData);
      jsonData = jsonData.replace(/"severity":"(\d+)"/, '"severity":$1');
      //window.alert(jsonData);
      const response:HttpResponse<any>|any= await this.http.post(url, jsonData,options).toPromise();
      //if(!response.Ok()){ //can use:any
      //window.alert("ERROR UNABLE TO CREATE");

      //}
      if (response && (response.status < 400 || response.status==undefined)) {
        window.alert('Report created successfully!');
        await this.router.navigateByUrl('/');
        await WeatherReports.refresh(this.http);
      } else {
        window.alert('Error creating report. Status: ' + (response ? response.status : 'Unknown'));
      }
      //window.alert('Report created:'+ response);
    } catch (error) {
      console.error('Error creating report:', error);
    }
  }
  onNotesChange(value: string) {
    this.formData.notes = value;
  }
  async updateReport(){
    //window.alert(JSON.stringify(this.formData));
    try {
      const url = `http://weatherreportapitodeploy20230531141202.azurewebsites.net/api/WeatherReport/update/${this.weather_report?.timestamp}`; // Replace with your API endpoint
      const currentTimestamp = new Date().toISOString();
      const reportData = {
        timestamp: this.weather_report?.timestamp,
        city: this.formData.city,
        zipCode: this.formData.zipCode,
        type_Of_Severe_Weather: this.formData.type_of_severe_weather,
        severity: Number(parseInt(this.formData.severity, 10)), //may need to do some string parsing to remove the quotes
        notes: (this.formData.notes==''||this.formData.notes==' '||this.formData.notes==null)?null:this.formData.notes
      };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const options = { headers: headers };
      let jsonData = JSON.stringify(reportData);
      jsonData = jsonData.replace(/"severity":"(\d+)"/, '"severity":$1');
      //window.alert(jsonData);
      const response:HttpResponse<any>|any= await this.http.post(url, jsonData,options).toPromise();
      //if(!response.Ok()){ //can use:any
      //window.alert("ERROR UNABLE TO CREATE");

      //}
      if ((response && (!(response.status>=400)))||response==undefined) {
        window.alert('Report edited successfully!');
        await this.router.navigateByUrl('/');
        await WeatherReports.refresh(this.http);
      } else {
        window.alert('Error editing report. Status: ' + (response ? response.status : 'Unknown'));
      }
      //window.alert('Report created:'+ response);
    } catch (error) {
      console.error('Error editing report:', error);
    }
  }
}
