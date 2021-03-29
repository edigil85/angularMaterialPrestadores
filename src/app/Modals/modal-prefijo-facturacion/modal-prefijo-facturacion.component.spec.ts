import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrefijoFacturacionComponent } from './modal-prefijo-facturacion.component';

describe('ModalPrefijoFacturacionComponent', () => {
  let component: ModalPrefijoFacturacionComponent;
  let fixture: ComponentFixture<ModalPrefijoFacturacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPrefijoFacturacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrefijoFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
