import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from '../../servicios/datos-personales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nombre: string = ''; // Inicializar la variable nombre como una cadena vacía
  private sharedService = inject(DatosPersonalesService); // Inyección del servicio

  constructor() {}

  ngOnInit(): void {
    // Suscribirse al observable para obtener actualizaciones en tiempo real
    this.sharedService.nombre$.subscribe((nombre) => {
      this.nombre = nombre; // Actualizar la variable nombre con el valor del BehaviorSubject
    });
  }

  guardarNombre(): void {
    this.sharedService.setNombre(this.nombre);
    console.log('Nombre guardado:', this.nombre);
  }

  eliminarNombre(): void {
    this.sharedService.setNombre('');
    this.nombre = ''; // Limpiar la variable nombre también
    console.log('Nombre eliminado:', this.nombre);
  }
}
