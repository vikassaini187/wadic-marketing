import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorflowSectionComponent } from './worflow-section.component';

describe('WorflowSectionComponent', () => {
  let component: WorflowSectionComponent;
  let fixture: ComponentFixture<WorflowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorflowSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorflowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
