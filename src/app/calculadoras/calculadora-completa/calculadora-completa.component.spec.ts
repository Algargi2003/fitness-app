import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCompletaComponent } from './calculadora-completa.component';

describe('CalculadoraCompletaComponent', () => {
  let component: CalculadoraCompletaComponent;
  let fixture: ComponentFixture<CalculadoraCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraCompletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
