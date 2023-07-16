import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportDetailsComponent } from './weather-report-details.component';

describe('WeatherReportDetailsComponent', () => {
  let component: WeatherReportDetailsComponent;
  let fixture: ComponentFixture<WeatherReportDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherReportDetailsComponent]
    });
    fixture = TestBed.createComponent(WeatherReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
