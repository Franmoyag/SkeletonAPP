import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServicioDBService } from 'src/app/services/servicio-db.service';

@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.page.html',
  styleUrls: ['./agregar-alumnos.page.scss'],
})
export class AgregarAlumnosPage implements OnInit {

nombre: string = "";
rut: string = "";
genero: string = "";
direccion: string = "";
comuna: string = "";

  constructor(private db: ServicioDBService, private toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  enviarDatos(){
    this.db.insertarAlumnos(this.rut, this.nombre, this.direccion, this.comuna, this.genero);
    this.db.presentToast("Alumno Agregado Correctamente");
    this.router.navigate(['/listar-alumnos'])
    }

    

}
