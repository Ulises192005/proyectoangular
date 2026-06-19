import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.urlApi}/registro`, usuario);
  }

  login(credenciales: { correo: string; contrasena: string; rol: string }): Observable<any> {
    return this.http.post(`${this.urlApi}/login`, credenciales);
  }
}