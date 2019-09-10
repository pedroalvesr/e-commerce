import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from './../../core/entity/produto';

@Component({
  selector: 'mxtech-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Produto;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.produto = new Produto();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Produto) => {
      Object.assign(this.produto, params); 
    });
  }

}
