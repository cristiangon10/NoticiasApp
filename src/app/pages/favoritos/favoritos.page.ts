import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(
    public dataLocalService: DataLocalService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.validarData();
  }

  validarData(){
    let noticias = this.dataLocalService.arrayNoticias;
    if (noticias.length <= 0) {
      this.alertNoticiasVacias();
    }
  }

  async alertNoticiasVacias() {
    const alert = await this.alertController.create({
      header: 'Lo Sentimos...',
      message: 'Actualmente no cuentas con noticias favoritas.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
