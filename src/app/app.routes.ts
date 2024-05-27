import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'emp',
        loadChildren : () =>import('./emp/emp.module').then(m=>m.EmpModule)
       }
   ];
