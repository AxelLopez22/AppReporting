import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAuthGuard } from './auth/guard/check-auth.guard';
import { LoginGuardGuard } from './auth/guard/login-guard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'reports/admin', pathMatch: 'full'},
  {path: 'reports/admin', loadChildren: () => import('../app/admin-panel/admin-panel.module').then(x => x.AdminPanelModule), canActivate: [CheckAuthGuard]},
  {path: 'reports/auth', loadChildren: () => import('../app/auth/auth.module').then(x => x.AuthModule), canActivate: [LoginGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
