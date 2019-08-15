import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
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

  categorias:Array<any> = [
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

  noticiasPais:Articulo[] = [];
  
  constructor( 
    private noticiasService:NoticiasService,
    private storage: Storage) { }

  ngOnInit() {       
    this.segment.value = this.categorias[0].valor;
    this.noticiasService.getTopHeadlinesCategorias(this.categorias[5].valor, 'co')
      .subscribe( resp => {
        this.noticiasPais = [];
        this.noticiasPais.push( ...resp.articles );
      })

    this.storage.get('Pais').then((val) => {
      console.log('Lo que llego a categorias como pais fue:' + val);
      
    })
  }

  // segmentChanged(event){

  //   let seleccion = event.detail.value;
  //   this.segment.value = seleccion;
  //   this.noticiasService.getTopHeadlinesCategorias(seleccion, 'co')
  //     .subscribe( resp => {
  //       this.noticiasPais = [];
  //       this.noticiasPais.push( ...resp.articles );
  //       console.log(resp.articles);
        
  //     })    
  // }
}
