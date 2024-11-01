import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,

} from 'ngx-ui-loader';
import { StageProgressModule } from './stage-progress/stage-progress.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './navbar/home/home.component';
import { MongoAPIComponent } from './mongo-api/mongo-api.component';



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
    HomeComponent,
    MongoAPIComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    StageProgressModule,
    BrowserAnimationsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
