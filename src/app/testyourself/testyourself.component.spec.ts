import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestyourselfComponent } from './testyourself.component';

describe('TestyourselfComponent', () => {
  let component: TestyourselfComponent;
  let fixture: ComponentFixture<TestyourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestyourselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestyourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
