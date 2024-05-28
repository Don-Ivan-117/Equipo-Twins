import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URLDitto = "https://pokeapi.co/api/v2/pokemon/ditto"
  private URLRayquaza = "https://pokeapi.co/api/v2/pokemon/rayquaza"

  constructor(private http:HttpClient) { }

  getDitto(){
    return this.http.get(this.URLDitto);
  }

  getRayquaza(){
    return this.http.get(this.URLRayquaza);
  }
  getLocation(){
    return this.http.get('https://rickandmortyapi.com/api/location')
  }

  getCharacterById(id: number){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
  }


}

