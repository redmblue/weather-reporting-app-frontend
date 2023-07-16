import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathergenComponent } from './weathergen.component';

describe('WeathergenComponent', () => {
  let component: WeathergenComponent;
  let fixture: ComponentFixture<WeathergenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeathergenComponent]
    });
    fixture = TestBed.createComponent(WeathergenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
