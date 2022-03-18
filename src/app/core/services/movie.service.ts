import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/models/moviecard';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopGrossingMovies() : Observable<MovieCard[]>{
    //call the api and get the movies to an array
    // GET
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}movies/top-grossing`)
  }
}
