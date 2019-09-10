import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Produto } from './../entity/produto';
import { Constants } from './../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  HOME_API = Constants.HOME_API;
  emitirItensCarrinho: EventEmitter<Produto[]> = new EventEmitter<Produto[]>();
  itensCarrinho: Produto[] = [];
  carrinhoVazio: boolean = true;  
  precoTotal = 0;
  frete: number = 0;

  constructor(private http: HttpClient) { }

  public setItemCarrinho(item) {
    this.itensCarrinho.push(item);
    this.emitirItensCarrinho.emit(this.itensCarrinho);
  }

  public getItensCarrinho() {
    this.emitirItensCarrinho.emit(this.itensCarrinho);
    return this.itensCarrinho;
  }

  public salvarPedido(pedido) {
    return this.http.post(`${this.HOME_API}/pedido`, pedido).pipe(take(1));

  }

  public limparCarrinho() {
    this.itensCarrinho = [];
    this.emitirItensCarrinho.emit(this.itensCarrinho);
  }

  // TODO 
  // Analisar a possibilidade de gerenciar as ações pelo service
  public removerItemCarrinho(item) {
    this.itensCarrinho.slice(this.itensCarrinho.indexOf(item), 1);
    this.carrinhoEstaVazio();
    this.calcularTotalPosRemoverItem();
  }

  private calcularTotalPosRemoverItem() {
    this.precoTotal = 0;
    this.itensCarrinho.forEach((item) => {
      this.precoTotal += (parseFloat(item.precoUnitario.toString()) * item.qtdeItem);
    });
    this.frete = this.frete;
  }

  private carrinhoEstaVazio() {
    if (this.itensCarrinho.length < 1) {
      this.carrinhoVazio = true;
    }
  }
}
