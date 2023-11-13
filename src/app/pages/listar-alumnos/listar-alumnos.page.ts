import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.page.html',
  styleUrls: ['./listar-alumnos.page.scss'],
})
export class ListarAlumnosPage implements OnInit {

  nombreAlumnoRecibido: string ="";
  rutAlumnoRecibido: string ="";
  generoAlumnoRecibido: string ="";

  constructor(private activerouter: ActivatedRoute, private router: Router) { 
    this.activerouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.nombreAlumnoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['nombreAlumnoEnviado'];
        this.rutAlumnoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['rutAlumnoEnviado'];
        this.generoAlumnoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['generoAlumnoEnviado'];
      }
    })
  }

  ngOnInit() {
  }

}
