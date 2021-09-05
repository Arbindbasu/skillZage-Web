import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manageb2buserComponent } from './manageb2buser.component';

describe('Manageb2buserComponent', () => {
  let component: Manageb2buserComponent;
  let fixture: ComponentFixture<Manageb2buserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Manageb2buserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Manageb2buserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
