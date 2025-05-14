import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface StarShipApiResponse {
  results: {name: string; model: string;}[];
}

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor() { }
}
