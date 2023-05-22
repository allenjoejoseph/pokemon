import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent implements OnInit{

  allPokemon:any=[]
  searchKey:string=''

  constructor(private api:ApiService, private activatedRoute:ActivatedRoute){

  }
  
  ngOnInit():void {
    // this.api.allPokemon()
    // .subscribe((result:any)=>{
    //   console.log(result);
    //   this.allPokemon=result['results']
    // })
    this.api.allPokemon()
    .subscribe((data:any)=>{
      data.results.forEach((result:any) => {
        this.api.getMoreData(result.name)
        .subscribe((response:any)=>{
          this.allPokemon.push(response)
          console.log(this.allPokemon);
          
        })
      });
    })
  }
}
