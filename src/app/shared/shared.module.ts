import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAboutComponent } from './shared-about/shared-about.component';
import { SharedBannerComponent } from './shared-banner/shared-banner.component';
import { SharedServiceComponent } from './shared-service/shared-service.component';
import { SharedNewsComponent } from './shared-news/shared-news.component';



@NgModule({
  declarations: [
    SharedAboutComponent,
    SharedBannerComponent,
    SharedServiceComponent,
    SharedNewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedAboutComponent,
    SharedBannerComponent,
    SharedServiceComponent,
    SharedNewsComponent
  ]
})
export class SharedModule { }
