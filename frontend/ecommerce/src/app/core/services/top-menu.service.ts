import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopMenuService {

  emittFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public setFilter(filter) {
    this.emittFilter.emit(filter);
  }
}
