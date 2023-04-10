import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexPlotOptions,
  ApexLegend,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnChanges {
  @Input() barChartData: BarChartData = {} as BarChartData;
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  ngOnChanges(): void {
    this.chartOptions = {
      series: [
        {
          name: '',
          data: this.barChartData.values,
        },
      ],
      chart: {
        width: '80%',
        height: 500,
        type: 'bar',
      },
      colors: this.barChartData.colors,
      labels: this.barChartData.labels,
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      annotations: {
        yaxis: this.barChartData.annotations?.map((a) => {
          return {
            y: a.value,
            borderColor: a.color,
            label: {
              text: a.label,
            },
          };
        }),
      },
    };
  }
}

export interface BarChartData {
  values: number[];
  colors: string[];
  labels?: string[];
  annotations?: { value: number; label: string; color?: string }[];
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  labels: string[];
  annotations: any;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};
