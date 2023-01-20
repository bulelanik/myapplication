import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'contractor-login',
    loadChildren: () => import('./contractor-login/contractor-login.module').then( m => m.ContractorLoginPageModule)
  },
  {
    path: 'contractor-register',
    loadChildren: () => import('./contractor-register/contractor-register.module').then( m => m.ContractorRegisterPageModule)
  },
  {
    path: 'contractor-options',
    loadChildren: () => import('./contractor-options/contractor-options.module').then( m => m.ContractorOptionsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
