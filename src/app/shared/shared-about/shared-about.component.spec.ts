import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAboutComponent } from './shared-about.component';

describe('SharedAboutComponent', () => {
  let component: SharedAboutComponent;
  let fixture: ComponentFixture<SharedAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
