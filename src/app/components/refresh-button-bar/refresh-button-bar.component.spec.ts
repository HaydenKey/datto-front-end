import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshButtonBarComponent } from './refresh-button-bar.component';

describe('RefreshButtonBarComponent', () => {
  let component: RefreshButtonBarComponent;
  let fixture: ComponentFixture<RefreshButtonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshButtonBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
