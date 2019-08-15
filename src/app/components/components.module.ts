import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoticiasCompComponent } from './noticias-comp/noticias-comp.component';
import { NoticiaCompComponent } from './noticia-comp/noticia-comp.component';

@NgModule({
  declarations: [
    NoticiasCompComponent,
    NoticiaCompComponent
  ],
  exports:[
    NoticiasCompComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
  
})
export class ComponentsModule { }
