import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSecComponent } from './counter-sec.component';

describe('CounterSecComponent', () => {
  let component: CounterSecComponent;
  let fixture: ComponentFixture<CounterSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
