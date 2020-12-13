import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usr2Component } from './usr2.component';

describe('Usr2Component', () => {
  let component: Usr2Component;
  let fixture: ComponentFixture<Usr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usr2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
