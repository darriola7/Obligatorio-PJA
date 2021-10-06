import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadVentasComponent } from './cantidad-ventas.component';

describe('CantidadVentasComponent', () => {
  let component: CantidadVentasComponent;
  let fixture: ComponentFixture<CantidadVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
