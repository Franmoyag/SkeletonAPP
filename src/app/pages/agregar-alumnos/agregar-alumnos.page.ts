import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServicioDBService } from 'src/app/services/servicio-db.service';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'


@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.page.html',
  styleUrls: ['./agregar-alumnos.page.scss'],
})
export class AgregarAlumnosPage implements OnInit {
  nombre: string = '';
  rut: string = '';
  genero: string = '';
  direccion: string = '';
  comuna: string = '';

  imageSource: any;

  constructor(
    private db: ServicioDBService,
    private toastController: ToastController,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  enviarDatos() {
    this.db.insertarAlumnos(
      this.rut,
      this.nombre,
      this.direccion,
      this.comuna,
      this.genero
    );
    this.db.presentToast('Alumno Agregado Correctamente');
    this.router.navigate(['/listar-alumnos']);
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    });

    this.imageSource = image.dataUrl;
  };
}
