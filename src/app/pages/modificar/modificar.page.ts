import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioDBService } from 'src/app/services/servicio-db.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  
  nombre: string = '';
  rut: string = '';
  genero: string = '';
  direccion: string = '';
  comuna: string = '';

  constructor(private router: Router, private activedRouter: ActivatedRoute, private servicio: ServicioDBService) {
    this.activedRouter.queryParamMap.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.rut = this.router.getCurrentNavigation()?.extras?.state?.['rutAlumnoEnviado'];
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombreAlumnoEnviado'];
        this.direccion = this.router.getCurrentNavigation()?.extras?.state?.['direccionAlumnoEnviado'];
        this.comuna = this.router.getCurrentNavigation()?.extras?.state?.['comunaAlumnoEnviado'];
        this.genero = this.router.getCurrentNavigation()?.extras?.state?.['generoAlumnoEnviado'];
      }
    })
  }

  ngOnInit() {

  }

enviarDatos(){
  this.servicio.modificarAlumnos(this.rut, this.nombre, this.direccion, this.comuna, this.genero);
  this.servicio.presentToast("Datos de Alumno actualizados.");
  this.router.navigate(['/listar-alumnos'])
}



}


