import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { usuariosSimulados } from '../models/data.models';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación



// auth.service.ts
buscarBD2(usuario: string, clave: string): void {
  const usuarioEncontrado = usuariosSimulados.find(
    u => u.usuario === usuario && u.clave === clave
  );

  if (usuarioEncontrado) {
    this.isAuthenticatedSubject.next(true);
    this.usuarioSubject.next(usuarioEncontrado.nombreCompleto);
    this.loginFailedSubject.next(false);
    // Almacenar el tipo de usuario
    this.usuarioSubject.next(usuarioEncontrado.tipo); // Asegúrate de que esto funcione en tu lógica
  } else {
    this.isAuthenticatedSubject.next(false);
    this.loginFailedSubject.next(true);
  }
}
  //buscarBD3(usuario: string, clave: string): Promise<boolean> { // Devuelve una promesa
   // return new Promise((resolve) => {  // Simular la autenticación con un retraso de 4 segundos
     // setTimeout(() => {  // Simular la autenticación con un retraso de 4 segundos
       // const usuarioEncontrado = usuariosSimulados.find( // Buscar un usuario en la lista de usuarios simulados
       //   u => u.usuario === usuario && u.clave === clave // Revisar si el usuario y la clave coinciden con los datos de un usuario
      //  );

        //if (usuarioEncontrado) { // Si el usuario y la clave coinciden con los datos de un usuario, activar
        //  this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
         // this.usuarioSubject.next(usuarioEncontrado.nombreCompleto); // Actualizar el nombre completo del usuario autenticado.
         // this.loginFailedSubject.next(false); // Restablecer loginFailed a false
         // resolve(true); // Resuelve la promesa como `true` si la autenticación es exitosa
       // } else {
        //  this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
        //  this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
        //  resolve(false); // Resuelve la promesa como `false` si la autenticación falla
        //}
     // }, 4000); // Retraso de 4000 ms = 4 segundos
   // });
  //}



  logout(): void {
    this.usuarioSubject.next('');  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  //
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.  // Desloguearse y
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
  }

  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }

}
