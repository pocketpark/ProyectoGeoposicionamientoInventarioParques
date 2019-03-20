import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaParquePage } from './vista-parque.page';

describe('VistaParquePage', () => {
  let component: VistaParquePage;
  let fixture: ComponentFixture<VistaParquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaParquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaParquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
