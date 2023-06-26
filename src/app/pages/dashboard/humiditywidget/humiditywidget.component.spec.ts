import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumiditywidgetComponent } from './humiditywidget.component';

describe('HumiditywidgetComponent', () => {
  let component: HumiditywidgetComponent;
  let fixture: ComponentFixture<HumiditywidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumiditywidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumiditywidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
