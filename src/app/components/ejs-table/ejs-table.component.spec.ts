import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjsTableComponent } from './ejs-table.component';

describe('EjsTableComponent', () => {
  let component: EjsTableComponent;
  let fixture: ComponentFixture<EjsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjsTableComponent]
    });
    fixture = TestBed.createComponent(EjsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
