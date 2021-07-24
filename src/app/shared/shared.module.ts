import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAboutComponent } from './shared-about/shared-about.component';



@NgModule({
  declarations: [
    SharedAboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedAboutComponent
  ]
})
export class SharedModule { }
