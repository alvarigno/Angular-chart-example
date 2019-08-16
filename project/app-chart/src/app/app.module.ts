import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
 {path: 'doughnut-chart', component: MyPieChartComponent},
 // {path: 'radar-chart', component: MyRadarChartComponent},
 // {path: 'pie-chart', component: MyPieChartComponent},
  {path: '**', component: MyBarChartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyPieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
