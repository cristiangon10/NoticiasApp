import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaService } from '../interfaces/interfases';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http:HttpClient ) {  }

  getTopHeadlines(pais){
    return this.http.get<RespuestaService>(`https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=06bfb8c9f25c49a4b0b48428f5676679`)
  }
}
