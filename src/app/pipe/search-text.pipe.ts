import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(items: any[], searchItem: any, jsonString: string): any[] {
    if (!searchItem || searchItem === '') {
      return items;
    } else {
      searchItem = searchItem.toLowerCase();
      return items.filter(it => {
        if (it[jsonString]) {
          return it[jsonString].toLowerCase().includes(searchItem);
        }
      });
    }
  }

}

