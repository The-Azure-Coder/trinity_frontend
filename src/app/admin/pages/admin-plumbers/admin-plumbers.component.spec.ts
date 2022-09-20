import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlumbersComponent } from './admin-plumbers.component';

describe('AdminPlumbersComponent', () => {
  let component: AdminPlumbersComponent;
  let fixture: ComponentFixture<AdminPlumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
