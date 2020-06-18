import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerNowComponent } from './volunteer-now.component';

describe('VolunteerNowComponent', () => {
  let component: VolunteerNowComponent;
  let fixture: ComponentFixture<VolunteerNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
