import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCodigoHabilitacionComponent } from './modal-codigo-habilitacion.component';

describe('ModalCodigoHabilitacionComponent', () => {
  let component: ModalCodigoHabilitacionComponent;
  let fixture: ComponentFixture<ModalCodigoHabilitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCodigoHabilitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCodigoHabilitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
