import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filtro: string, value: string): any[] {
    if (!items) {
        return [];
    }
    if (!filtro || !value) {
        return items;
    }

    return items.filter(singleItem => singleItem[filtro].toString().includes(value));
}

}
