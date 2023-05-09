import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthServicesService } from 'src/app/auth/services/auth-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<boolean>();
  usernameAuthenticated:string = '';

  constructor(private authService: AuthServicesService){}

  ngOnInit(): void {
    this.usernameAuthenticated = this.authService.getUsernameAuthenticated();
  }

  logout(){
    setTimeout(() => {
      this.authService.logout();
    }, 1500);
  }
}
