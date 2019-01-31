import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario:Usuario = new Usuario();
    usuario.nome = "Gleyson Barroso";
    usuario.email = "g3l2e1@gmail.com";
    return usuario;
  }

  public listaUsuario(): Usuario[]{
    return [
      {
        nome: "Gleyson Barroso",
        email: "g3l2e1@gmail.com"
      },
      {
        nome: "Jeferson Sales",
        email: "jefersonsales1@gmail.com"
      },
      {
        nome: "Júlio César",
        email: "julio@asasulfabrica.com.br"
      },
      {
        nome: "Ernanes Bessa",
        email: "comercial@asasulfabrica.com.br"
      },
      {
        nome: "Alan Bessa",
        email: "alan.bessa84@gmail.com"
      },
      {
        nome: "Bivar Guimarães",
        email: "bivarguimaraes@gmail.com"
      },
      {
        nome: "Algislane Barroso",
        email: "algislanebarroso@gmail.com"
      }
    ]
  }
}
