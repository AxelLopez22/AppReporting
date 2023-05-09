import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  // @ViewChild('offcanvasNavbar') offcanvas!: ElementRef;

  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent) {
  //   if (this.offcanvas.nativeElement.classList.contains('show')) {
  //     this.offcanvas.nativeElement.classList.remove('show');
  //     document.body.classList.remove('offcanvas-open');
  //   }
  // }
}
