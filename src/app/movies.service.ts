import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTriending(triending:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${triending}/day?api_key=8e18c244e55590b07e9e72ba21547008`)
  }
  getMovieDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8e18c244e55590b07e9e72ba21547008`)
  }
  getTvdetails(tvId:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=8e18c244e55590b07e9e72ba21547008`)
  }
 
}
