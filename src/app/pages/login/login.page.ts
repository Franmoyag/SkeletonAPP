import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';


  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  async onLogin(){
    console.log('Email: ', this.email);
    console.log('Contraseña: ', this.password);

    if (this.email === 'usuario@duoc.cl' && this.password === 'Abc123'){
      console.log ('Inicio de Sesion Exitoso');

      this.router.navigate(['/listar-alumnos']);

      const toast = await this.toastController.create({
        message: 'Inicio de Sesion Exitoso',
        duration: 2000,
        position: 'bottom',
        color: 'success'
      });

      toast.present();
    } else {
      console.error ('Credenciales Incorrectas');

      const toast = await this.toastController.create({
        message: 'Credenciales Incorrectas',
        duration: 2000,
        position: 'bottom',
        color: 'danger'
      });

      toast.present();
    }

  }



}
