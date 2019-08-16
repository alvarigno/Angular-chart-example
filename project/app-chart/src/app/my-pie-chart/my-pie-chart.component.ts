import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit {
  public pieChartLabels = ['Etapa Q1', 'Etapa Q2', 'Etapa Q3', 'Etapa Q4', 'Etapa Q5', 'Etapa Q6', 'Etapa Q7'];
  public pieChartData = [2, 15, 18, 2, 15, 18, 2];
  public pieChartType = 'pie';
  constructor() { }
  ngOnInit() {
  }


  public ListenerClick = () => {

    alert('Fucniona?');

  }


}