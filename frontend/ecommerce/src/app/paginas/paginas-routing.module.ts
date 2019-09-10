import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginasComponent } from './paginas.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '', component: PaginasComponent, children: [
      { path: 'pedidos', component: PedidosComponent },
      { path: 'meu-carrinho', component: CarrinhoComponent },
      { path: 'produto-detalhe', component: ProdutoDetalheComponent },
      { path: 'dashboard', component: DashboardComponent },
      // { path: '**', component: DashboardComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
