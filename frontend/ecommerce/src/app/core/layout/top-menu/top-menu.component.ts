import { Component, OnInit, EventEmitter } from '@angular/core';

import { CarrinhoService } from './../../services/carrinho.service';
import { TopMenuService } from './../../services/top-menu.service';

@Component({
  selector: 'mxtech-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  qtdeitensCarrinho: number;
  filtro: string;
  

  constructor(
    private carrinhoService: CarrinhoService,
    private topMenuService: TopMenuService) { }

  ngOnInit() {
    this.carrinhoService.emitirItensCarrinho.subscribe((item) => {
      this.qtdeitensCarrinho = item.length;
    });

    
  }

  public emitirFiltro() {
    this.topMenuService.setFilter(this.filtro);
  }

}
