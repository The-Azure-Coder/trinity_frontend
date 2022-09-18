import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbingServicesComponent } from './plumbing-services.component';

describe('PlumbingServicesComponent', () => {
  let component: PlumbingServicesComponent;
  let fixture: ComponentFixture<PlumbingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumbingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumbingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
