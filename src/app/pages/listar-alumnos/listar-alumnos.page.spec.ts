import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarAlumnosPage } from './listar-alumnos.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ListarAlumnosPage', () => {
  let component: ListarAlumnosPage;
  let fixture: ComponentFixture<ListarAlumnosPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ListarAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
