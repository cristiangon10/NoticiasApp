import { Component, OnInit, ViewChild, } from '@angular/core';
import { IonSegment, AlertController, IonContent, IonInfiniteScroll } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Articulo } from 'src/app/interfaces/interfases';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  @ViewChild(IonContent, { static: false }) contenido: IonContent;
  @ViewChild(IonInfiniteScroll, { static: false }) scroll: IonInfiniteScroll;

  categorias: Array<any> = [
    {
      valor: 'bussines',
      texto: 'Negocios'
    },
    {
      valor: 'entertainment',
      texto: 'Entretenimiento'
    },
    {
      valor: 'general',
      texto: 'Generales'
    },
    {
      valor: 'healt',
      texto: 'Salud'
    },
    {
      valor: 'science',
      texto: 'Ciencia'
    },
    {
      valor: 'sports',
      texto: 'Deportes'
    },
    {
      valor: 'technology',
      texto: 'Tecnología'
    }
  ]

  noticiasPais: Articulo[] = [];
  pais = '';
  bandera = false;

  constructor(
    private noticiasService: NoticiasService,
    private storage: Storage,
    private alertController: AlertController) { }

  ngOnInit() {
    this.segment.value = this.categorias[0].valor;
    this.seleccionarPaisGlobal(this.segment.value);
  }

  ionViewWillEnter(): void {
    this.segment.value = this.categorias[0].valor;
    this.seleccionarPaisGlobal(this.segment.value);
  }

  cambioCategoria(event) {
    this.cargarNoticias(event.detail.value, this.pais);
    this.contenido.scrollToTop(500);
    this.bandera = false;
  }

  seleccionarPaisGlobal(categoria: string) {
    this.storage.get('Pais').then((val) => {
      this.cargarNoticias(categoria, val);
    });
  }

  cargarNoticias(categoria: string, pais: string) {
    this.pais = pais;
    this.noticiasService.getTopHeadlinesCategorias(categoria, pais)
      .subscribe(resp => {
        if (resp.articles.length > 0) {
          this.noticiasPais = [];
          this.noticiasPais.push(...resp.articles);
          this.scroll.disabled = false;
        } else {
          if (!this.bandera) {
            this.scroll.disabled = true;
            this.bandera = true;
            this.noticiasPais = [];
            this.alertNoticiasVacias();
          }
        }
      })
  }

  async alertNoticiasVacias() {
    const alert = await this.alertController.create({
      header: 'Lo Sentimos...',
      message: 'No se encotraron noticias o no estan disponibles.',
      buttons: ['OK']
    });

    await alert.present();
  }

  loadData(event) {
    setTimeout(() => {
      this.cargarNoticiaPorPagina(event);
    }, 2000);
  }

  cargarNoticiaPorPagina(event) {
    this.noticiasService.getTopHeadlinesCategoriasPages().subscribe(resp => {
      
      if (resp.articles.length > 0) {
        this.noticiasPais.push(...resp.articles);
      }
      if (resp.articles.length <= 0) {  
        this.scroll.disabled = true;
      }
      if (event) {
        event.target.complete();
      }

    })
  }
}
