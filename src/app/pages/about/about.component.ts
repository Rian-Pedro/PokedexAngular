import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { About } from 'src/app/About';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  pokeId: number = 0;
  pokeInformations: any = {
    habilidades: [],
    altura: 0,
    id: 0,
    nome: '',
    sprite: [],
    tipos: [''],
    peso: 0
  };
  // nome: String = '';
  // pokeSprites: any = {
  //   sprite: {}
  // }
  // pokeInformations: any = {};

  constructor(private activateRoute: ActivatedRoute, private pokemonService: PokemonService) {}

  toString(value: number): String {
    // console.log(this.pokeInformations.tipos)
    return String(value);
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      this.pokeId = Number(param.get("id"));
    })
    this.getPokeInfos();
  }

  getPokeInfos(): void {
    this.pokemonService.getAllInformations(this.pokeId).subscribe((pokeInfos) => {
      this.pokeInformations = {
        habilidades: this.getHab(pokeInfos.abilities),
        altura: pokeInfos.height / 10.0,
        id: pokeInfos.id,
        nome: pokeInfos.name,
        sprite: pokeInfos.sprites,
        tipos: this.getTypes(pokeInfos.types),
        peso: pokeInfos.weight / 10.0
      }
      // this.pokeSprites.sprite = pokeInfos.sprites
      // console.log(this.pokeInformations.tipos[0])
      // console.log(this.pokeInformations.habilidades);
    })
  }

  getHab(habs: any) {
    const hab = [];
    for(let habi of habs) {
      hab.push({
        name: habi.ability.name,
        is_hidden: habi.is_hidden
      })
    }
    return hab;
  }

  getTypes(types: any) {
    const array = [];
    for(let tipo of types) {
      array.push(tipo.type.name)
    }
    return array;
  }
}
