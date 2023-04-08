import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimientosyemocionesComponent } from './sentimientosyemociones.component';

describe('SentimientosyemocionesComponent', () => {
  let component: SentimientosyemocionesComponent;
  let fixture: ComponentFixture<SentimientosyemocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimientosyemocionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimientosyemocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
