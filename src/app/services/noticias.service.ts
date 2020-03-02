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
  pageActual = 1;
  categoriaActual = '';
  pageCategoria = 1;
  paisActual = '';

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    //Recibimos la seccion exclusiva de cada servicio y la agregamos a la url
    query = apiUrl + query;

    //Mandamos esta direccion completa y ne anexamos la ApiKey con los headers
    return this.http.get<T>(query, { headers });
  }

  //Servicio inicial de noticias por pais.
  getTopHeadlines(pais: string) {
    this.pageActual = 1;
    return this.executeQuery<RespuestaService>(`/top-headlines?country=${pais}`);
  }

  //Servicio del infinite scroll para cada pagina de noticias
  getNoticiasPorPagina(pais: string) {
    //Se le suma cada vez que entra al servicio
    this.pageActual++;    
    //se envia la seccion exclusiva del servicio correspondiente
    return this.executeQuery<RespuestaService>(`/top-headlines?country=${pais}&page=${this.pageActual}`);
  }

  //Servicio para cada categoria por pais.
  getTopHeadlinesCategorias(categoria: string, pais: string) {
    if (categoria != this.categoriaActual) {
      this.categoriaActual = categoria;
      this.pageCategoria = 1;
      this.paisActual = pais;
    }
    return this.executeQuery<RespuestaService>(`/top-headlines?country=${pais}&category=${categoria}`);
  }

  getTopHeadlinesCategoriasPages(){
    this.pageCategoria++;
    return this.executeQuery<RespuestaService>(`/top-headlines?country=${this.paisActual}&category=${this.categoriaActual}&page=${this.pageCategoria}`);
  }
}
