import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { IonList } from '@ionic/angular';
import { Articulo } from 'src/app/interfaces/interfases';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  paises = [
    {
      nombre: 'Emiratos Arabes Unidos',
      codigo: 'ae'
    },
    {
      nombre: 'Argentina',
      codigo: 'ar'
    },
    {
      nombre: 'Austria',
      codigo: 'at'
    },
    {
      nombre: 'Australia',
      codigo: 'au'
    },
    {
      nombre: 'Belgica',
      codigo: 'be'
    },
    {
      nombre: 'Bulgaria',
      codigo: 'bg'
    },
    {
      nombre: 'Brasil',
      codigo: 'br'
    },
    {
      nombre: 'Canada',
      codigo: 'ca'
    },
    {
      nombre: 'Suiza',
      codigo: 'ch'
    },
    {
      nombre: 'China',
      codigo: 'cn'
    },
    {
      nombre: 'Colombia',
      codigo: 'co'
    },
    {
      nombre: 'Cuba',
      codigo: 'cu'
    },
    {
      nombre: 'Republica Checa',
      codigo: 'cz'
    },
    {
      nombre: 'Alemania',
      codigo: 'de'
    },
    {
      nombre: 'Egipto',
      codigo: 'eg'
    },
    {
      nombre: 'Francia',
      codigo: 'fr'
    },
    {
      nombre: 'Reino Unido',
      codigo: 'gb'
    },
    {
      nombre: 'Grecia',
      codigo: 'gr'
    },
    {
      nombre: 'Honk Kong',
      codigo: 'hk'
    },
    {
      nombre: 'Hungria',
      codigo: 'hu'
    },
    {
      nombre: 'Indonesia',
      codigo: 'id'
    },
    {
      nombre: 'Irlanda',
      codigo: 'ie'
    },
    {
      nombre: 'Israel',
      codigo: 'il'
    },
    {
      nombre: 'India',
      codigo: 'in'
    },
    {
      nombre: 'Italia',
      codigo: 'it'
    },
    {
      nombre: 'Japon',
      codigo: 'jp'
    },
    {
      nombre: 'Corea del Sur',
      codigo: 'kr'
    },
    {
      nombre: 'Lituania',
      codigo: 'lt'
    },
    {
      nombre: 'Letonia',
      codigo: 'lv'
    },
    {
      nombre: 'Marruecos',
      codigo: 'ma'
    },
    {
      nombre: 'Mexico',
      codigo: 'mx'
    },
    {
      nombre: 'Malasia',
      codigo: 'my'
    },
    {
      nombre: 'Nigeria',
      codigo: 'ng'
    },
    {
      nombre: 'Paises Bajos',
      codigo: 'nl'
    },
    {
      nombre: 'Noruega',
      codigo: 'no'
    },
    {
      nombre: 'Filipinas',
      codigo: 'ph'
    },
    {
      nombre: 'Polonia',
      codigo: 'pl'
    },
    {
      nombre: 'Portugal',
      codigo: 'pt'
    },
    {
      nombre: 'Rumania',
      codigo: 'ro'
    },
    {
      nombre: 'Serbia',
      codigo: 'rs'
    },
    {
      nombre: 'Rusia',
      codigo: 'ru'
    },
    {
      nombre: 'Arabia Saudita',
      codigo: 'sa'
    },
    {
      nombre: 'Suecia',
      codigo: 'se'
    },
    {
      nombre: 'Singapur',
      codigo: 'sg'
    },
    {
      nombre: 'Eslovenia',
      codigo: 'si'
    },
    {
      nombre: 'Eslovaquia',
      codigo: 'sk'
    },
    {
      nombre: 'Tailandia',
      codigo: 'th'
    },
    {
      nombre: 'Turquia',
      codigo: 'tr'
    },
    {
      nombre: 'Taiwan',
      codigo: 'tw'
    },
    {
      nombre: 'Ucrania',
      codigo: 'ua'
    },
    {
      nombre: 'Estados Unidos',
      codigo: 'us'
    },
    {
      nombre: 'Venezuela',
      codigo: 've'
    },
    {
      nombre: 'Sudafrica',
      codigo: 'za'
    }
  ]

  noticia:Articulo[] = [];

  noticias:object = {
    pais: null
  }

  @ViewChild(IonList, { static: false }) list: IonList;

  constructor(private noticiasService: NoticiasService) {
    
  }

  ngOnInit() {
  }

  consultar(noticias){
    
    this.noticiasService.getTopHeadlines(noticias).subscribe(
      resp => {        
        this.noticia = [];
        this.noticia.push( ...resp.articles );
      }
    )
  }
}
