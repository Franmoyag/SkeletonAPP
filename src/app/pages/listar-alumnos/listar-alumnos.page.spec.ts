import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarAlumnosPage } from './listar-alumnos.page';

describe('ListarAlumnosPage', () => {
  let component: ListarAlumnosPage;
  let fixture: ComponentFixture<ListarAlumnosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
