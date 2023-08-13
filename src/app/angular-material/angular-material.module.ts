import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { AngularMaterialComponent } from './angular-material.component';
import { SideNavCComponent } from './side-nav-c/side-nav-c.component';
import { TestCComponent } from './test-c/test-c.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
  declarations: [
    AngularMaterialComponent,
    SideNavCComponent,
    TestCComponent,
    TestTwoComponent,
    NavTabsComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,



  ]
})
export class AngularMaterialModule { }
