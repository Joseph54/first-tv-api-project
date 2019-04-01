import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import { DisplayResultComponent } from './view/display-result/display-result.component';
import {Routes, RouterModule} from '@angular/router';
import { EpisodesComponent } from './view/episodes/episodes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SeasonsComponent} from './view/seasons/seasons.component';

const appRoutes: Routes = [
  {path: 'search', component: DisplayResultComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DisplayResultComponent,
    EpisodesComponent,
    SeasonsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
