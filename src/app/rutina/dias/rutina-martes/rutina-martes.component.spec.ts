import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaMartesComponent } from './rutina-martes.component';

describe('RutinaMartesComponent', () => {
  let component: RutinaMartesComponent;
  let fixture: ComponentFixture<RutinaMartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaMartesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinaMartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
