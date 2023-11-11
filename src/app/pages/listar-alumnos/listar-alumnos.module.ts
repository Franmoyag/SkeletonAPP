import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAlumnosPageRoutingModule } from './listar-alumnos-routing.module';

import { ListarAlumnosPage } from './listar-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarAlumnosPageRoutingModule
  ],
  declarations: [ListarAlumnosPage]
})
export class ListarAlumnosPageModule {}
