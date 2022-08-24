import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSecComponent } from './service-sec.component';

describe('ServiceSecComponent', () => {
  let component: ServiceSecComponent;
  let fixture: ComponentFixture<ServiceSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
