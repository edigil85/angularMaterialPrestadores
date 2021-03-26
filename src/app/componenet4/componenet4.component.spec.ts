import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenet4Component } from './componenet4.component';

describe('Componenet4Component', () => {
  let component: Componenet4Component;
  let fixture: ComponentFixture<Componenet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componenet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
