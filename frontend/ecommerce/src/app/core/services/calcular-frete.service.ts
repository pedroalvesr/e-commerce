import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Constants } from './../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CalcularFreteService {

  HOME_API = Constants.HOME_API;

  constructor(private http: HttpClient) { }

  calcularFrete(qtdItem) {
    return this.http.get(`${this.HOME_API}/frete/${qtdItem}`).pipe(take(1));
  }
}
