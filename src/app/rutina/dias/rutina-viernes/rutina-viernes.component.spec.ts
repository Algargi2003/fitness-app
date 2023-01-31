import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaViernesComponent } from './rutina-viernes.component';

describe('RutinaViernesComponent', () => {
  let component: RutinaViernesComponent;
  let fixture: ComponentFixture<RutinaViernesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaViernesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinaViernesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
