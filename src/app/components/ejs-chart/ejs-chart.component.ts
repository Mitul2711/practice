import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejs-chart',
  templateUrl: './ejs-chart.component.html',
  styleUrls: ['./ejs-chart.component.css']
})
export class EjsChartComponent implements OnInit {

  chartData: any;
  primaryXAxis: any;
  primaryYAxis: any;
  title : string = 'Sales Analysis';
  legendSetting: any;
  marker : any;
  toolTip: any;


  ngOnInit(): void {
    this.chartData = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    this.primaryXAxis = {
      valueType: 'Category'
    };
    this.primaryYAxis = {
      labelFormat: '${value}K'
    }
    this.legendSetting = {
      visible: true
    }
    this.marker = {
      dataLabel: {
        visible: true
      }
    }
    this.toolTip = {
      enable: true
    }

  }

}
