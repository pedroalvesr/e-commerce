import { Component, OnInit } from '@angular/core';

import { MaximatechService } from './../../core/services/maximatech.service';
import { Cliente } from './../../core/entity/cliente';
import { Produto } from './../../core/entity/produto';
import { TopMenuService } from './../../core/services/top-menu.service';

@Component({
  selector: 'mxtech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  clientes: Cliente;
  produtos: Produto[] = [];
  totalProdutos: number;
  filtro: string;
  itensFiltrados: [] = [];

  constructor(
    private maximatechService: MaximatechService,
    private topMenuService: TopMenuService) { }

  ngOnInit() {
    this.maximatechService.maximatech().subscribe((mxtech: any) => {
      this.clientes = mxtech.clientes;
      mxtech.produtos.map(produto => {
        Object.assign(produto, { qtdeItem: 1 });
      })
      this.produtos = mxtech.produtos;
      this.totalProdutos = mxtech.produtos.length;
    });

    this.topMenuService.emittFilter.subscribe((filtro) => {
       this.filtro = filtro;
    });
    
  }
}
