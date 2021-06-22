import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyServicesListComponent } from './beauty-services-list.component';

describe('BeautyServicesListComponent', () => {
  let component: BeautyServicesListComponent;
  let fixture: ComponentFixture<BeautyServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
