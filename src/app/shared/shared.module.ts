import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAboutComponent } from './shared-about/shared-about.component';
import { SharedBannerComponent } from './shared-banner/shared-banner.component';
import { SharedServiceComponent } from './shared-service/shared-service.component';



@NgModule({
  declarations: [
    SharedAboutComponent,
    SharedBannerComponent,
    SharedServiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedAboutComponent,
    SharedBannerComponent,
    SharedServiceComponent
  ]
})
export class SharedModule { }
