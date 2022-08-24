import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDeshboardComponent } from './landing-deshboard.component';

describe('LandingDeshboardComponent', () => {
  let component: LandingDeshboardComponent;
  let fixture: ComponentFixture<LandingDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingDeshboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
