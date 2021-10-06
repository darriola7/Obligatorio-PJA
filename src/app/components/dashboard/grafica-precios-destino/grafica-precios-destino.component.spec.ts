import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPreciosDestinoComponent } from './grafica-precios-destino.component';

describe('GraficaPreciosDestinoComponent', () => {
  let component: GraficaPreciosDestinoComponent;
  let fixture: ComponentFixture<GraficaPreciosDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPreciosDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPreciosDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
