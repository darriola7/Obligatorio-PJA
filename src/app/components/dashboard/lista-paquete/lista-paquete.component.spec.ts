import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPaqueteComponent } from './lista-paquete.component';

describe('ListaPaqueteComponent', () => {
  let component: ListaPaqueteComponent;
  let fixture: ComponentFixture<ListaPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
