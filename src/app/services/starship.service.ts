import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signal, computed } from '@angular/core';
import { map } from 'rxjs';

export interface StarShipApiResponse {
  next: string | null;
  results: StarShip[];
}

export interface StarShip {
  name: string;
  model: string;
  url: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  pilots: string[];
}

export interface Pilot {
  name: string;
}

export interface Film {
  title: string;
  starships: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private apiUrl = 'https://swapi.py4e.com/api/starships/'
  private readonly _ships = signal<StarShip[]>([]);
  readonly ships = computed(() => this._ships())

  private nextPageUrl: string | null = 'https://swapi.py4e.com/api/starships/';


  constructor(private http: HttpClient) {}

  getStarshipId(id: string): Observable<StarShip> {
    return this.http.get<StarShip>(`${this.apiUrl}${id}/`)
  }

  getStarShips(): Observable<StarShipApiResponse> {
    return this.http.get<StarShipApiResponse>(this.apiUrl);
  }

  fetchNextPage(): void{
    if(!this.nextPageUrl) return;

    this.http.get<StarShipApiResponse>(this.nextPageUrl).subscribe((data) => {
      const updated = [...this._ships(), ...data.results];
      this._ships.set(updated);
      this.nextPageUrl = data.next;
    })
  }

  resetShips(): void {
    this._ships.set([]);
    this.nextPageUrl = this.apiUrl;
    this.fetchNextPage();
  }

  getPilot(url: string): Observable<Pilot> {
    return this.http.get<any>(url).pipe(
      map(data => ({ name: data.name }))
    );
  }

  getMoviesForShip(shipUrl: string): Observable<string[]> {
    return this.http.get<any>('https://swapi.py4e.com/api/films/').pipe(
      map(res => res.results),
      map((films: Film[]) =>
        films
          .filter(film => film.starships.includes(shipUrl))
          .map(film => film.title)
      )
    );
  }
}
