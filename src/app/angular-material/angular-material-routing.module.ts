import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material.component';
import { TestCComponent } from './test-c/test-c.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {
    path: '',
    component: AngularMaterialComponent,
    children: [

      {
        path: 'test',
        component: TestCComponent,
      },
      {
        path: 'test2',
        component: TestTwoComponent,

      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
