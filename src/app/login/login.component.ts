import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Variables login
   */
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  /**
   * Métodos a ocupar en html del componente principal que corresponden a los métodos del auth service
   * se inyecta el servicio en el constructor del componente
   */
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = ''; // limpiar campos
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}
