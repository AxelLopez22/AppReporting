import { Component } from '@angular/core';
import { SideNavItem } from 'src/app/models/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  sideNavContent: SideNavItem[] = [
    {
      tittle: 'Reporte Financiero',
      link: 'reporteFinanciero',
      icon: 'widgets'
    },
    
  ];
}
