import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from './alumnos';

@Injectable({
  providedIn: 'root',
})
export class ServicioDBService {
  public database!: SQLiteObject;

  tablaAlumnos: string =
    'CREATE TABLE IF NOT EXISTS alumnos (rut_alumno VARCHAR (10) PRIMARY KEY NOT NULL, nombre_alumno VARCHAR (100) NOT NULL, direccion_alumno VARCHAR (500) NOT NULL, comuna_alumno VARCHAR (50) NOT NULL, sexo_alumno VARCHAR (10) NOT NULL);';

  registoAlumnos: string =
    "INSERT or IGNORE INTO alumnos (rut_alumno, nombre_alumno, direccion_alumno, comuna_alumno, sexo_alumno) VALUES ('15770961-5', 'FRANCISCO JAVIER MOYA GONZALEZ', 'AVDA. JORGE ROSS OSSA 1553. CASA 298.', 'PUENTE ALTO', 'MASCULINO')";

  listaAlumnos = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    this.crearDB();
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'globe',
    });

    await toast.present();
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  crearDB() {
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: 'bdalumnos.db',
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.crearTablas();
        })
        .catch((e) => {
          this.presentToast('Error BD: ' + e);
        });
    });
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaAlumnos, []);
      await this.database.executeSql(this.registoAlumnos, []);
      this.buscarAlumnos();
      this.isDBReady.next(true);
    } catch (e) {
      this.presentToast('Error Tablas: ' + e);
    }
  }

  buscarAlumnos() {
    return this.database.executeSql('SELECT * FROM alumnos', []).then((res) => {
      let items: Alumnos[] = [];

      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            rut: res.rows.item(i).rut_alumno,
            nombre: res.rows.item(i).nombre_alumno,
            direccion: res.rows.item(i).direccion_alumno,
            comuna: res.rows.item(i).comuna_alumno,
            sexo: res.rows.item(i).sexo_alumno,
          });
        }
      }
      this.listaAlumnos.next(items as any);
    });
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchAlumnos(): Observable<Alumnos[]> {
    return this.listaAlumnos.asObservable();
  }

insertarAlumnos(rut: any, nombre: any, direccion: any, comuna: any, sexo: any){
  let data = [rut, nombre, direccion, comuna, sexo];
  return this.database.executeSql('INSERT INTO alumnos (rut_alumno, nombre_alumno, direccion_alumno, comuna_alumno, sexo_alumno) VALUES (?,?,?,?,?)',data).then (res =>{
    this.buscarAlumnos();
  });
}


modificarAlumnos(rut: any, nombre: any, direccion: any, comuna: any, sexo: any){
  let data = [ nombre, direccion, comuna, sexo,rut];
  return this.database.executeSql('UPDATE alumnos SET nombre_alumno = ?, direccion_alumno = ?, comuna_alumno = ?, sexo_alumno = ? WHERE rut_alumno = ?', data).then (data2 =>{
    this.buscarAlumnos();
  })
}
  


eliminarAlumnos(rut: any){
  return this.database.executeSql('DELETE FROM alumnos WHERE rut_alumno = ?', [rut]).then(a =>{
    this.buscarAlumnos();
  })
}


}
