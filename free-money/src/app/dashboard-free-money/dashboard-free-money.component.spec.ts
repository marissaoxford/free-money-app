import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFreeMoneyComponent } from './dashboard-free-money.component';

describe('DashboardFreeMoneyComponent', () => {
  let component: DashboardFreeMoneyComponent;
  let fixture: ComponentFixture<DashboardFreeMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFreeMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFreeMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
