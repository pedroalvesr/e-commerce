import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { PaginasComponent } from './paginas.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FilterPipe } from '../core/pipes/filter.pipe';

@NgModule({
  declarations: [
    PaginasComponent,
    DashboardComponent,
    ProdutoDetalheComponent,
    CarrinhoComponent,
    PedidosComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PaginasRoutingModule
  ]
})
export class PaginasModule { }
