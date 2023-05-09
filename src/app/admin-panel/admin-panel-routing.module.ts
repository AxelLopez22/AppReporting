import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReporteFinancieroComponent } from './pages/reporte-financiero/reporte-financiero.component';

const routes: Routes = [
  {path:'', redirectTo: 'reports/admin', pathMatch: 'full'},
  {path:'', component: AdminPanelComponent, children:[
    {path:'inicio', component: InicioComponent},
    {path:'reporteFinanciero', component: ReporteFinancieroComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
