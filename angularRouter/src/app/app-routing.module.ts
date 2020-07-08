import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./routes/main/main.module').then(m => m.MainModule) },
  { path: 'about', loadChildren: () => import('./routes/about/about.module').then(m => m.AboutModule) },
  { path: 'gallery', loadChildren: () => import('./routes/gallery/gallery.module').then(m => m.GalleryModule) },
  // { path: '*', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
