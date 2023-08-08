import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,

} from 'ngx-ui-loader';
import { StageProgressModule } from './stage-progress/stage-progress.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#ffffff',
  bgsSize: 40,
  fgsType: SPINNER.chasingDots,
  pbThickness: 5,
};

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ToolbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    StageProgressModule,
    LayoutModule,
    BrowserAnimationsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
