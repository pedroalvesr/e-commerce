import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Constants } from './../constants/constants';
import { Cliente } from './../entity/cliente';

@Injectable({
  providedIn: 'root'
})
export class MaximatechService {

  MAXIMATECH_API = Constants.MAXIMATECH_API;

  constructor(private http: HttpClient) { }

  public maximatech() {
    return this.http.get(this.MAXIMATECH_API).pipe(take(1));
  }


}
