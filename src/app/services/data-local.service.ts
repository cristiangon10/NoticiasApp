import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Articulo } from '../interfaces/interfases';
import { async } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private storage: Storage,
    public toastController: ToastController) {
    this.consultarFavoritos();
   }

  arrayNoticias: Articulo[] = [];

  guardarNoticia(noticia: Articulo) {
    const existe = this.arrayNoticias.find(noti => noti.title === noticia.title);

    if (!existe) {
      this.arrayNoticias.unshift(noticia);
      this.storage.set('Noticias', this.arrayNoticias);
      this.presentToast('¡Se ha almacenado con éxito.!');
    }
  }

  borrarNoticia(noticia: Articulo){
    this.arrayNoticias = this.arrayNoticias.filter(not => not.title != noticia.title);
    this.storage.set('Noticias', this.arrayNoticias);
    this.presentToast('¡Se ha borrado con éxito.!');
  }

  async consultarFavoritos() { 
    const favoritos = await this.storage.get('Noticias');
    if (favoritos) {
      this.arrayNoticias = favoritos;
    } else {
      this.arrayNoticias = [];
    }
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
