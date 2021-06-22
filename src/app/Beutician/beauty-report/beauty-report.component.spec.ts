import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyReportComponent } from './beauty-report.component';

describe('BeautyReportComponent', () => {
  let component: BeautyReportComponent;
  let fixture: ComponentFixture<BeautyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
