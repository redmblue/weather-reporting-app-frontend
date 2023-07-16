import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportAddEditComponent } from './weather-report-add-edit.component';

describe('WeatherReportAddEditComponent', () => {
  let component: WeatherReportAddEditComponent;
  let fixture: ComponentFixture<WeatherReportAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherReportAddEditComponent]
    });
    fixture = TestBed.createComponent(WeatherReportAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
