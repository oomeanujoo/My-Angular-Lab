import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageProgressRoutingModule } from './stage-progress-routing.module';
import { StageProgressComponent } from './stage-progress.component';
import { StageOneComponent } from './stage-one/stage-one.component';
import { AboutComponent } from '../navbar/about/about.component';



@NgModule({
  declarations: [
    StageProgressComponent,
    StageOneComponent,
    AboutComponent

  ],
  imports: [
    CommonModule,
    StageProgressRoutingModule,
  ]
})
export class StageProgressModule { }
