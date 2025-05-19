import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StarShipApiResponse {
  results: {name: string; model: string; url: string;}[];
}

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private apiUrl = 'https://swapi.py4e.com/api/starships/'

  constructor(private http: HttpClient) {}

  getStarshipId(id: string){
    return this.http.get<StarShipApiResponse>(`${this.apiUrl}${id}/`)
  }

  getStarShips(): Observable<StarShipApiResponse> {
    return this.http.get<StarShipApiResponse>(this.apiUrl);
  }
}
