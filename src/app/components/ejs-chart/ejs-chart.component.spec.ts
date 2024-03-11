import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjsChartComponent } from './ejs-chart.component';

describe('EjsChartComponent', () => {
  let component: EjsChartComponent;
  let fixture: ComponentFixture<EjsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjsChartComponent]
    });
    fixture = TestBed.createComponent(EjsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
