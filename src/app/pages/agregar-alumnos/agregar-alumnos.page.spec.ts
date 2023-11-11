import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarAlumnosPage } from './agregar-alumnos.page';

describe('AgregarAlumnosPage', () => {
  let component: AgregarAlumnosPage;
  let fixture: ComponentFixture<AgregarAlumnosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
