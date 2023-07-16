import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import {HttpClient, HttpClientModule} from '@angular/common/http';
//MIGHT WANT TO ADD A MAX LIMIT ON THE WEATHER REPORTS - MAKE SCROLLABLE IF NOT ALREADY - OR ADD PAGES. BUT COULD BE CHALLENGING - CHECK MATERIAL
//implement tailwinds top bar
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeathergenComponent } from './weathergen/weathergen.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatButtonModule} from '@angular/material/button';
import { WeatherReportDetailsComponent } from './weather-report-details/weather-report-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WeatherReportAddEditComponent } from './weather-report-add-edit/weather-report-add-edit.component';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WeathergenComponent,
    TopBarComponent,
    WeatherReportDetailsComponent,
    WeatherReportAddEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: WeathergenComponent},
      {path: 'WeatherReports/:WeatherReportTimestamp',component: WeatherReportDetailsComponent},
      {path: `AddOrEditWeatherReport/:WeatherReportTimestamp`,component: WeatherReportAddEditComponent},
    ]),
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
