import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Constants } from './../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  HOME_API = Constants.HOME_API;

  constructor(private http: HttpClient) { }

  public buscarProdutos() {
    return this.http.get(`${this.HOME_API}/pedido`).pipe(take(1));
  }
}
