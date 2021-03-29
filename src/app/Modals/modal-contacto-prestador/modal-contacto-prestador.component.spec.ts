import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactoPrestadorComponent } from './modal-contacto-prestador.component';

describe('ModalContactoPrestadorComponent', () => {
  let component: ModalContactoPrestadorComponent;
  let fixture: ComponentFixture<ModalContactoPrestadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContactoPrestadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContactoPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
