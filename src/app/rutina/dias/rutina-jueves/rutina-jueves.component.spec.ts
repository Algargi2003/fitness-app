import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaJuevesComponent } from './rutina-jueves.component';

describe('RutinaJuevesComponent', () => {
  let component: RutinaJuevesComponent;
  let fixture: ComponentFixture<RutinaJuevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaJuevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinaJuevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
