import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  allPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/')
  }

  getMoreData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  viewPokemon(pokemonId:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  }
}
