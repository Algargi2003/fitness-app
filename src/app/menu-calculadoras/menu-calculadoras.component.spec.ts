import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCalculadorasComponent } from './menu-calculadoras.component';

describe('MenuCalculadorasComponent', () => {
  let component: MenuCalculadorasComponent;
  let fixture: ComponentFixture<MenuCalculadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCalculadorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCalculadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
