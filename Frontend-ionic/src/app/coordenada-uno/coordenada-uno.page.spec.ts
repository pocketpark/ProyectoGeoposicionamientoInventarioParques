import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadaUnoPage } from './coordenada-uno.page';

describe('CoordenadaUnoPage', () => {
  let component: CoordenadaUnoPage;
  let fixture: ComponentFixture<CoordenadaUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadaUnoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadaUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
