import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.host+'usuario';

  constructor(private http:HttpClient) { }

  public getUsuario(): Usuario{
    let usuario:Usuario = new Usuario();
    usuario.nome = "Gleyson Barroso";
    usuario.email = "g3l2e1@gmail.com";
    return usuario;
  }

  public salvar(usuario:Usuario):Observable<Usuario>{
    console.log(this.url);
    return this.http.post<Usuario>(this.url, usuario);
  }

  public listaUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }
}
