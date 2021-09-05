import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerpathComponent } from './careerpath.component';

describe('CareerpathComponent', () => {
  let component: CareerpathComponent;
  let fixture: ComponentFixture<CareerpathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerpathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
