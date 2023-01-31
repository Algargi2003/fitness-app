import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaSabadoComponent } from './rutina-sabado.component';

describe('RutinaSabadoComponent', () => {
  let component: RutinaSabadoComponent;
  let fixture: ComponentFixture<RutinaSabadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaSabadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinaSabadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
