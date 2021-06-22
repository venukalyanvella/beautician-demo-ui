import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauticianDetailsComponent } from './beautician-details.component';

describe('BeauticianDetailsComponent', () => {
  let component: BeauticianDetailsComponent;
  let fixture: ComponentFixture<BeauticianDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeauticianDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeauticianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
