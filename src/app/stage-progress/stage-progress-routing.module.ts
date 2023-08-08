import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StageProgressComponent } from './stage-progress.component';
import { StageOneComponent } from './stage-one/stage-one.component';
import { AboutComponent } from '../navbar/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: StageProgressComponent,
    // children: [
    //   { path: 'stage-one', component: StageOneComponent },
    //   { path: 'stage-two', component: AboutComponent },
    // ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageProgressRoutingModule { }
