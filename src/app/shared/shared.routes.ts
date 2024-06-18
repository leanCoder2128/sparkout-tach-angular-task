import { Routes } from '@angular/router';
import { AppLayoutComponent } from './components/layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./../modules/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  
  {
    path: '',
    component: AppLayoutComponent,
    canActivate : [],
    children: [
      {
        path: 'products',
        loadChildren: () => import('./../modules/homeScreen/homeScreen.module').then((m) => m.HomeScreenModule)
      }
    ],
  },
];
