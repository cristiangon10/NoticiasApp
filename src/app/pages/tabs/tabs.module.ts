import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'noticias'
  },{
    path: '',
    component: TabsPage,
    children : [
      {
        path: 'noticias',
        loadChildren: '../noticias/noticias.module#NoticiasPageModule'
      },
      {
        path: 'categorias',
        loadChildren: '../categorias/categorias.module#CategoriasPageModule'
      },
      {
        path: 'favoritos',
        loadChildren: '../favoritos/favoritos.module#FavoritosPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
