import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path:"home", loadChildren: ()=>import('./home/home.module').then(mod=>mod.HomeModule)
  },
  { 
    path:"about", loadChildren: ()=>import('./about/about.module').then(mod=>mod.AboutModule)
  },
  { 
    path:"services", loadChildren: ()=>import('./services/services.module').then(mod=>mod.ServicesModule)
  },
  { 
    path:"news", loadChildren: ()=>import('./news/news.module').then(mod=>mod.NewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
