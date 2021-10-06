import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPersonasDestinoComponent } from './grafica-personas-destino.component';

describe('GraficaPersonasDestinoComponent', () => {
  let component: GraficaPersonasDestinoComponent;
  let fixture: ComponentFixture<GraficaPersonasDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPersonasDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPersonasDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
