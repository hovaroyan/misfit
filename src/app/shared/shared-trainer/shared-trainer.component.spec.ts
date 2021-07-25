import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTrainerComponent } from './shared-trainer.component';

describe('SharedTrainerComponent', () => {
  let component: SharedTrainerComponent;
  let fixture: ComponentFixture<SharedTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
