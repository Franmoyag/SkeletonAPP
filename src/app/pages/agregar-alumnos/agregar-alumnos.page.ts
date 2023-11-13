import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.page.html',
  styleUrls: ['./agregar-alumnos.page.scss'],
})
export class AgregarAlumnosPage implements OnInit {

nombre: string = "";
rut: string = "";
genero: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enviarDatos(){
    let navigationExtras: NavigationExtras = {
      state : {
        nombreAlumnoEnviado : this.nombre,
        rutAlumnoEnviado : this.rut,
        generoAlumnoEnviado : this.genero
      }
    }
    this.router.navigate(['/listar-alumnos'],navigationExtras)

  }

}
