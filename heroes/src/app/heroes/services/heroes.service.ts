import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/*export class HeroesService {
  
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  getHeroeById(id:string) {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`);
  }
}*/
export class HeroesService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id:string){
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
  
  busquedaHeroe(termino:string) {
    const params = {
      q: termino,
      _limit: 4
    }
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes/`, { params });
  }
}