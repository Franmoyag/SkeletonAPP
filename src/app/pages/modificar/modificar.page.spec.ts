import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPage } from './modificar.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { of } from 'rxjs/internal/observable/of';

describe('ModificarPage', () => {

  const queryParams = {
    rutAlumnoEnviado: '',
    nombreAlumnoEnviado: '',
    direccionAlumnoEnviado: '',
    comunaAlumnoEnviado: '',
    generoAlumnoEnviado: ''
  };

  const fakeActivatedRoute = {
    snapshot: { data: {  } },
    queryParamMap: of (queryParams ? convertToParamMap(queryParams) : {})
  } as ActivatedRoute;

  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}, SQLite ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
