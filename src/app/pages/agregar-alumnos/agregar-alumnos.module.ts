import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarAlumnosPageRoutingModule } from './agregar-alumnos-routing.module';

import { AgregarAlumnosPage } from './agregar-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarAlumnosPageRoutingModule
  ],
  declarations: [AgregarAlumnosPage]
})
export class AgregarAlumnosPageModule {}
