import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Asegúrate de que esta ruta sea correcta
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;
  userType = '';
  showQR = false;
  showAsignaturas = false; // Nueva variable para mostrar asignaturas
  asignaturas = ['Aplicaciones Moviles', 'Calidad de Software', 'Arquitectura']; // Asignaturas disponibles
  showQRAlumnos = false; // Nueva variable para mostrar el QR para alumnos

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.AuthService.isAuthenticated$.subscribe(
      isAuth => this.isAuthenticated = isAuth
    );
    this.AuthService.usuario$.subscribe(
      tipo => this.userType = tipo
    );
  }

  verAsignaturas() {
    this.showAsignaturas = true; // Mostrar la lista de asignaturas
    this.showQRAlumnos = false; // Reiniciar el estado del QR para alumnos
  }

  handleAsignaturaClick(asignatura: string) {
    if (this.userType === 'Estudiante') {
      this.showQRAlumnos = true; // Muestra la opción de escanear QR
    } else if (this.userType === 'Profesor') {
      this.showQR = true; // Muestra la opción de generar QR
    }
  }

  cerrarQR() {
    this.showQR = false;
    this.showQRAlumnos = false; // Cerrar ambas opciones
  }
}
