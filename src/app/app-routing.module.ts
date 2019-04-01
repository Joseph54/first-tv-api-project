import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayResultComponent} from './view/display-result/display-result.component';
import {SeasonsComponent} from './view/seasons/seasons.component';
import {AppComponent} from './app.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', component: AppComponent},
  {path: 'search/:id', component: DisplayResultComponent},
  {path: 'seasons/:id', component: SeasonsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
