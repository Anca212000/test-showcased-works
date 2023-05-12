import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkComponent } from './view-work.component';

describe('ViewWorkComponent', () => {
  let component: ViewWorkComponent;
  let fixture: ComponentFixture<ViewWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewWorkComponent]
    });
    fixture = TestBed.createComponent(ViewWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
