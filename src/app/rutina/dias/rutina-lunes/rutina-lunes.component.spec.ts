import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaLunesComponent } from './rutina-lunes.component';

describe('RutinaLunesComponent', () => {
  let component: RutinaLunesComponent;
  let fixture: ComponentFixture<RutinaLunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaLunesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinaLunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
