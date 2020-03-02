import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Articulo } from '../interfaces/interfases';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private storage: Storage) { }

  arrayNoticias: Articulo[] = [];

  guardarNoticia(noticia: Articulo) {
    const existe = this.arrayNoticias.find(noti => noti.title === noticia.title);

    if (!existe) {
      this.arrayNoticias.unshift(noticia);
      this.storage.set('Noticias', this.arrayNoticias);
    }
  }

  consultarFavoritos() { }
}
