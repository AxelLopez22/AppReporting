import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { AdminPanelComponent } from './admin-panel.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgParticlesModule } from "ng-particles";
import { ReporteFinancieroComponent } from './pages/reporte-financiero/reporte-financiero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InicioComponent,
    AdminPanelComponent,
    HeaderComponent,
    SideNavComponent,
    ReporteFinancieroComponent,
    
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    PdfViewerModule,
    MaterialModule,
    NgParticlesModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminPanelModule { }
