import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkInfoComponent } from './landmark-info.component';

describe('LandmarkInfoComponent', () => {
  let component: LandmarkInfoComponent;
  let fixture: ComponentFixture<LandmarkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandmarkInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandmarkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
