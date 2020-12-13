import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usr1Component } from './usr1.component';

describe('Usr1Component', () => {
  let component: Usr1Component;
  let fixture: ComponentFixture<Usr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usr1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
