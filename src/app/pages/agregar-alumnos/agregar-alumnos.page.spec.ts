import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarAlumnosPage } from './agregar-alumnos.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarAlumnosPage', () => {
  let component: AgregarAlumnosPage;
  let fixture: ComponentFixture<AgregarAlumnosPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
