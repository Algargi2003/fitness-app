import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinasComponent } from './proteinas.component';

describe('ProteinasComponent', () => {
  let component: ProteinasComponent;
  let fixture: ComponentFixture<ProteinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProteinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
