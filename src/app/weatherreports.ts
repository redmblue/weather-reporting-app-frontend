import {HttpClient} from "@angular/common/http";;

export interface Weather_Report{
  timestamp: string;
  city: string;
  zipCode: string;
  type_Of_Severe_Weather: string;
  severity: number;
  notes?: string; //nullable
}
/*make it blank by default - and then allow the user to click a button which calls an api orjust remove these idk*/
export const weather_reports = [
  {
    timestamp: "2023-05-30T04:34:28Z",
    city: "Test City",
    zipCode: "TestZip1",
    type_Of_Severe_Weather: "Thunderstorm",
    severity: 7,
    notes: "Test Notes"
  },
  {
    timestamp: "2023-05-30T04:45:28Z",
    city: "Test City12",
    zipCode: "TestZip12",
    type_Of_Severe_Weather: "Dust Devil",
    severity: 7
  },
];
export class WeatherReports {
  static data: Weather_Report[] = [{
    timestamp: '2023-05-30T04:34:28Z',
    city: 'string',
    zipCode: 'string',
    type_Of_Severe_Weather: 'string',
    severity: 0,
    notes: 'string'
  },
    {
      timestamp: '2023-05-30T04:34:48Z',
      city: 'The city of test',
      zipCode: 'string',
      type_Of_Severe_Weather: 'string',
      severity: 0,
      notes: 'not null anymore!'
    }];
  /*
  static refresh(httpinstance:HttpClient):Promise<void>{
  try {
  const apiUrl = 'http://localhost:5030/api/WeatherReport';

  httpinstance.get<Weather_Report[]>(apiUrl).subscribe(
(response: Weather_Report[]) => {
  //window.alert(response); // Check the response value in the console

  //this.weather_reports = response;
  WeatherReports.data=response;
  //window.alert(this.weather_reports); // Check the weather_reports value in the console

  // Perform any additional processing or manipulation with the weather_reports array
},
(error) => {
  //console.error('Error refreshing data:', error);

  window.alert('Error refreshing data:'+JSON.stringify(error));
}
);
} catch (error) {
  //console.error('Error refreshing data:', error);
  window.alert("ERORR");
  (error:any) => { window.alert('Error refreshing data:'+JSON.stringify(error)); }
}
    return new Promise<void>((resolve,reject)=>{

    });
  }*/
  static refresh(httpinstance: HttpClient): Promise<void> {
    const apiUrl = 'http://weatherreportapitodeploy20230531141202.azurewebsites.net/api/WeatherReport';

    return new Promise<void>((resolve, reject) => {
      httpinstance.get<Weather_Report[]>(apiUrl).subscribe(
        (response: Weather_Report[]) => {
          WeatherReports.data = response;
          resolve();
        },
        (error) => {
          console.error('Error refreshing data:', JSON.stringify(error));
          window.alert('Error refreshing data:'+JSON.stringify(error));
          reject(error);
        }
      );
    });
  }
};
