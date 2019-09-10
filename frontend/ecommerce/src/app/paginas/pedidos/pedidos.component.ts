import { Component, OnInit } from '@angular/core';

import { Pedido } from './../../core/entity/pedido';
import { PedidoService } from './../../core/services/pedido.service';

@Component({
  selector: 'mxtech-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.buscarProdutos().subscribe((pedido: Pedido[]) => {
      this.pedidos = pedido;
    });
  }

}
