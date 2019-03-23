import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteModalPage } from './ambiente-modal.page';

describe('AmbienteModalPage', () => {
  let component: AmbienteModalPage;
  let fixture: ComponentFixture<AmbienteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbienteModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
