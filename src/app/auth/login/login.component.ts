import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUsuario!: FormGroup;
  loading: boolean = false;
  spinner = false;

  constructor( private fb: FormBuilder, private route: Router){
    this.loginUsuario = this.fb.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['admin12345', Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  login() {
    this.spinner = true;
    let user = {
      nombreUsuario: "admin",
      correo: "admin@gmail.com"
    }
    localStorage.setItem("user-info",JSON.stringify(user));
    setTimeout(() => {
      this.spinner = false;
      this.route.navigate(['reports/admin/inicio']);
    }, 2000);
  }
}
