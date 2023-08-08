import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  // {
  //   path: 'about', component: AboutComponent
  // },

  {
    path: 'stage-progress', loadChildren: () => import('../app/stage-progress/stage-progress.module').then(m => m.StageProgressModule)
    ,
    // children: [{
    //   path: 'about', component: AboutComponent
    // }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
