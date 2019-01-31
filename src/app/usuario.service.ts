import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuario';

  constructor(private http:HttpClient) { }

  public getUsuario(): Usuario{
    let usuario:Usuario = new Usuario();
    usuario.nome = "Gleyson Barroso";
    usuario.email = "g3l2e1@gmail.com";
    return usuario;
  }

  public salvar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario);
  }

  public listaUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }
}
