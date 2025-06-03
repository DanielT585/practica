import { Routes } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { PasatiemposComponent } from './pasatiempos/pasatiempos.component';
import { LugaresComponent } from './lugares/lugares.component';

export const routes: Routes = [
  { path: '', redirectTo: 'presentacion', pathMatch: 'full' },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'pasatiempos', component: PasatiemposComponent },
  { path: 'lugares', component: LugaresComponent },
];
