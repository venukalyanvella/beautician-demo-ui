import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeautyparlourComponent } from './add-beautyparlour.component';

describe('AddBeautyparlourComponent', () => {
  let component: AddBeautyparlourComponent;
  let fixture: ComponentFixture<AddBeautyparlourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeautyparlourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeautyparlourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
