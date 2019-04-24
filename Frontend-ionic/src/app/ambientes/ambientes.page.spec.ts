import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientesPage } from './ambientes.page';

describe('AmbientesPage', () => {
  let component: AmbientesPage;
  let fixture: ComponentFixture<AmbientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
