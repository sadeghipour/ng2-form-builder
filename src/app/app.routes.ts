import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  //{ path: '',      component: TextBoxComponent },
  { path: '', loadChildren: './+home#HomeModule'},
  //{ path: 'detail', loadChildren: './+detail#DetailModule'},
];
