import { Component } from '@angular/core';

import { Pokemon } from 'src/app/Pokemon';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pokemons: any = [ ];
  namePoke: string = '';
  type: String = '';
  permite: Boolean = false;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
     this.getPokemons();
  }

   async getPokemons(): Promise<void> {
    for(let i = 1; i <= 151; i++){
      await this.pokemonService.getAll(i).subscribe((pokemon: any) => {
        this.pokemons.push({
          nome: pokemon.name,
          id: pokemon.id,
          sprite: pokemon.sprites.front_default,
          types: this.getTypes(pokemon.types)
        })
        this.pokemons.sort((a:any, b:any) => a.id - b.id);
      })
    }
  }

  getTypes(types: Array<any>) {
    const array = [];
    for(let typeu of types){
      array.push(typeu.type.name);
    }
    return array
  }

}
