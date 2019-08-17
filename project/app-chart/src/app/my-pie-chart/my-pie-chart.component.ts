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


  public chartClicked(e: any): void {

    console.log(e);
    if(e.active.length > 0){
      var points = [];
      var pointSelected = e.active[0]._chart.tooltip._model.caretY;
      var legends = e.active[0]._chart.legend.legendItems;
    
      for (var i = 0; i < e.active.length; ++i) {
        points.push(e.active[i]._model.y);
      }
    
      let position = points.indexOf(pointSelected);
      let label = legends[position].text
    
      console.log("Point: "+label)
    }

    //if (e.active.length > 0) {
    //  const chart = e.active[0]._chart;
    //  const activePoints = chart.getElementAtEvent(e.event);
    //  if ( activePoints.length > 0) {
    //    // get the internal index of slice in pie chart
    //    const clickedElementIndex = activePoints[0]._index;
    //    const label = chart.data.labels[clickedElementIndex];
    //    // get value by index
//
    //    const value = chart.data.datasets[0].data[clickedElementIndex];
    //    console.log(clickedElementIndex, label, value)
    //  }
    //}
  }

}