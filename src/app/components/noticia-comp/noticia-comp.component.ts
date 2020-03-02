import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/interfaces/interfases';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-noticia-comp',
  templateUrl: './noticia-comp.component.html',
  styleUrls: ['./noticia-comp.component.scss'],
})
export class NoticiaCompComponent implements OnInit {

  @Input() noticia: Articulo;

  constructor(
    private iab: InAppBrowser,
    public actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    public alertController: AlertController,
    private dataLocal: DataLocalService
  ) { }

  ngOnInit() { }

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url);
  }

  async abrirMenu() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            this.socialSharing.share(
              this.noticia.title,
              this.noticia.source.name,
              this.noticia.urlToImage,
              this.noticia.url
            )
          }
        }, {
          text: 'Favorito',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            this.dataLocal.guardarNoticia(this.noticia);
          }
        },
        {
          text: 'Cerrar',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }
}
