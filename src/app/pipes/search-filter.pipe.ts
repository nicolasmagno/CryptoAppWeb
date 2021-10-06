import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, text:any): any {

    const result = []

    if(!(text==='')){
      for(const item of value){
        if(item.id.toLowerCase().includes(<string>text.toLowerCase())){
          result.push(item)
        }
      }

      return result;

    }else{
      return value
    }

  }

}
