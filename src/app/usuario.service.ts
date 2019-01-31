import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(){
    let usuario:Usuario = new Usuario();
    usuario.nome = "Gleyson Barroso";
    usuario.email = "g3l2e1@gmail.com";
    return usuario;
}
}
