import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDatePickerComponent } from './month-date-picker.component';

describe('MonthDatePickerComponent', () => {
  let component: MonthDatePickerComponent;
  let fixture: ComponentFixture<MonthDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
