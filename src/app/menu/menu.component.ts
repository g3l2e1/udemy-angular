import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  items:MenuItem[];
  display: boolean = false;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Usuário',
        items: [
          {label: 'Listar', routerLink: 'usuario'},
          {label: 'Cadastro', routerLink: 'usuario/add'}
        ]
      },
      {
        label: 'Estados',
        routerLink: 'estados'
      }
    ];
  }

  exibirLogin() {
    this.display = true;
  }

}
