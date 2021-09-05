import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manageb2cuserComponent } from './manageb2cuser.component';

describe('Manageb2cuserComponent', () => {
  let component: Manageb2cuserComponent;
  let fixture: ComponentFixture<Manageb2cuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Manageb2cuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Manageb2cuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
