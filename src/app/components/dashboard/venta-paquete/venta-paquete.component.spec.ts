import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPaqueteComponent } from './venta-paquete.component';

describe('VentaPaqueteComponent', () => {
  let component: VentaPaqueteComponent;
  let fixture: ComponentFixture<VentaPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaPaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
