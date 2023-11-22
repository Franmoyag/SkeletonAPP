import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServicioDBService } from 'src/app/services/servicio-db.service';


@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.page.html',
  styleUrls: ['./listar-alumnos.page.scss'],
})
export class ListarAlumnosPage implements OnInit {

  arregloAlumnos: any = [
    {
      rut: '',
      nombre: '',
      direccion: '',
      comuna: '',
      genero: '',
    }
    
  ]

  constructor(private router: Router, private servicioBD: ServicioDBService) { }

  ngOnInit() {

    this.servicioBD.dbState().subscribe(res => {
      if ( res ) {
        this.servicioBD.fetchAlumnos().subscribe(item => {
          this.arregloAlumnos = item;
        })
      }
    })
  }


  modificar (x: any){
    const navigationExtras: NavigationExtras = {
      state: {
        rutAlumnoEnviado: x.rut,
        nombreAlumnoEnviado: x.nombre,        
        direccionAlumnoEnviado : x.direccion,
        comunaAlumnoEnviado: x.comuna,
        generoAlumnoEnviado: x.genero 

      }
    }
    this.router.navigate(['/modificar'], navigationExtras);
  }



  eliminar(x: any) {
    this.servicioBD.eliminarAlumnos(x.rut);
    this.servicioBD.presentToast ("Alumno Eliminado");
  }

}
