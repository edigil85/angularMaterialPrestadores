import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoPrestadorComponent } from './modal-info-prestador.component';

describe('ModalInfoPrestadorComponent', () => {
  let component: ModalInfoPrestadorComponent;
  let fixture: ComponentFixture<ModalInfoPrestadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoPrestadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
