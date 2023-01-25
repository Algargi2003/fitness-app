import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraReglaTresComponent } from './calculadora-regla-tres.component';

describe('CalculadoraReglaTresComponent', () => {
  let component: CalculadoraReglaTresComponent;
  let fixture: ComponentFixture<CalculadoraReglaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraReglaTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraReglaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
