import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaService } from '../interfaces/interfases';
import { environment } from 'src/environments/environment';

//Apikey
const apiKey = environment.apiKey;

//Url petición
const apiUrl = environment.apiUrl;

//Headers petición
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //Contador para las paginas
  pageActual = 0;

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    //Recibimos la seccion exclusiva de cada servicio y la agregamos a la url
    query = apiUrl + query;

    //Mandamos esta direccion completa y ne anexamos la ApiKey con los headers
    return this.http.get<T>(query, { headers });
  }

  getTopHeadlines(pais: string) {
    //se envia la seccion exclusiva del servicio correspondiente
    return this.executeQuery<RespuestaService>(`/top-headlines?country=${pais}`);

    //return this.http.get<RespuestaService>(`${apiUrl}/top-headlines?country=${pais}&apiKey=${apiKey}`);
  }

  getNoticiasPorPagina(pais: string) {
    //Se le suma cada vez que entra al servicio
    this.pageActual++;
    //se envia la seccion exclusiva del servicio correspondiente
    return this.executeQuery<RespuestaService>(`/top-headlines?country=${pais}&page=${this.pageActual}`);

    //return this.http.get<RespuestaService>(`${apiUrl}/top-headlines?country=${pais}&apiKey=${apiKey}`);
  }

  getTopHeadlinesCategorias(categoria: string, pais: string) {
    return this.executeQuery<RespuestaService>(`/top-headlines?country=${pais}&category=${categoria}`);
    //return this.http.get<RespuestaService>(`${apiUrl}/top-headlines?country=${pais}&category=${categoria}&apiKey=${apiKey}`);
  }
}
