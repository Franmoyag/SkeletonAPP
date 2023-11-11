import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarAlumnosPage } from './agregar-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarAlumnosPageRoutingModule {}
