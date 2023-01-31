import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaMiercolesComponent } from './rutina-miercoles.component';

describe('RutinaMiercolesComponent', () => {
  let component: RutinaMiercolesComponent;
  let fixture: ComponentFixture<RutinaMiercolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaMiercolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinaMiercolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
