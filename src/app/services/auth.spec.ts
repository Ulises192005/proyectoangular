import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // La URL de nuestro backend en Node.js
  private urlApi = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Función para registrar un empleado
  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.urlApi}/registro`, usuario);
  }

  // Función para iniciar sesión (mandamos correo, contraseña y el rol elegido)
  login(credenciales: { correo: string; contrasena: string; rol: string }): Observable<any> {
    return this.http.post(`${this.urlApi}/login`, credenciales);
  }
}