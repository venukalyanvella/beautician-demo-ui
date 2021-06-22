import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyparlourDetailsComponent } from './beautyparlour-details.component';

describe('BeautyparlourDetailsComponent', () => {
  let component: BeautyparlourDetailsComponent;
  let fixture: ComponentFixture<BeautyparlourDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyparlourDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyparlourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
