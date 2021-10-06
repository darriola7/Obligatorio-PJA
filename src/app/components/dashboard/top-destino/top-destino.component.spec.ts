import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDestinoComponent } from './top-destino.component';

describe('TopDestinoComponent', () => {
  let component: TopDestinoComponent;
  let fixture: ComponentFixture<TopDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
