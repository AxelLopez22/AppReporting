import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private router: Router) { }

  logout():void{
    localStorage.removeItem('user-info')
    this.router.navigate(['auth/login'])
  }

  saveToken(token:string):void{
    localStorage.setItem('token', token)
  }

  isAuthenticated():boolean{
    // @ts-ignore
    return localStorage.getItem('user-info');
  }

  getUsernameAuthenticated():string{
    const user_info = JSON.parse( localStorage.getItem('user-info') || '{}' );
    return user_info.nombreUsuario
  }
}
