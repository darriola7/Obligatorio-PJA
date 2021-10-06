import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoDestinoComponent } from './promo-destino.component';

describe('PromoDestinoComponent', () => {
  let component: PromoDestinoComponent;
  let fixture: ComponentFixture<PromoDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
