import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { UploadComponent } from './upload/upload.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { TestCComponent } from './angular-material/test-c/test-c.component';
import { TestTwoComponent } from './angular-material/test-two/test-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  {
    path: 'stage-progress', loadChildren: () => import('../app/stage-progress/stage-progress.module').then(m => m.StageProgressModule)

  },
  {
    path: 'material', loadChildren: () => import('./angular-material/angular-material.module').then(m => m.AngularMaterialModule)

  },
  // { path: 'material', component: AngularMaterialComponent },     //this should be in its own separate module routing file
  // { path: 'material/test', component: TestCComponent }, //clutter
  // { path: 'material/testwo', component: TestTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
