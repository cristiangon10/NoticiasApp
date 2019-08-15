import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaService } from '../interfaces/interfases';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http:HttpClient ) {  }

  getTopHeadlines(pais){
    return this.http.get<RespuestaService>(`${apiUrl}/top-headlines?country=${pais}&apiKey=${apiKey}`);
  }

  getTopHeadlinesCategorias( categoria:string, pais:string ){
    return this.http.get<RespuestaService>(`${apiUrl}/top-headlines?country=${pais}&category=${categoria}&apiKey=${apiKey}`);
  }
}
