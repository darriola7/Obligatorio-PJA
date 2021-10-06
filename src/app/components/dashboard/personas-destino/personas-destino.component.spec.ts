import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasDestinoComponent } from './personas-destino.component';

describe('PersonasDestinoComponent', () => {
  let component: PersonasDestinoComponent;
  let fixture: ComponentFixture<PersonasDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasDestinoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
