import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasPageModule' },
  { path: 'categorias', loadChildren: './pages/categorias/categorias.module#CategoriasPageModule' },
  { path: 'favoritos', loadChildren: './pages/favoritos/favoritos.module#FavoritosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
