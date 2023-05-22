import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})
export class ViewPokemonComponent implements OnInit {
  
  pokemonId:string = ''
  pokemon:any={}

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){

  }
 
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.pokemonId=data.id
    })

    //to get a particular pokemon

    this.api.viewPokemon(this.pokemonId)
    .subscribe((result:any)=>{
      console.log(result);
      this.pokemon=result
    })
  }
}
