import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerComponent } from './trainer.component';
import { TrainerHeaderComponent } from './trainer-header/trainer-header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TrainerComponent,
    TrainerHeaderComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    SharedModule
  ]
})
export class TrainerModule { }
