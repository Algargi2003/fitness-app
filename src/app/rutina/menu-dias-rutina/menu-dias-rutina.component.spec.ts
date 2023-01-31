import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiasRutinaComponent } from './menu-dias-rutina.component';

describe('MenuDiasRutinaComponent', () => {
  let component: MenuDiasRutinaComponent;
  let fixture: ComponentFixture<MenuDiasRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDiasRutinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDiasRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
