import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs'
import { Pokemon } from '../Pokemon';
import { About } from '../About';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getAll(pokeNum: number): Observable<Pokemon[]> {
    return this.http.get<[]>(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`);
  }

  getAllInformations(pokeNum: number): Observable<About> {
    return this.http.get<About>(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
  }

}
