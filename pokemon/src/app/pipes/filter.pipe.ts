import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allPokemon:any[], searchKey:string, propertyName:string): any [] {
    
    const result:any=[]
    if(!allPokemon || searchKey == '' || propertyName ==''){
      return allPokemon
    }
    allPokemon.forEach((pokemon:any)=>{
      if(pokemon[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(pokemon)
      }
    })
    return result;
  }

}
