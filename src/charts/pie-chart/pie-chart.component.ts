import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnChanges {
  @Input() pieChartData: PieChartData = {} as PieChartData;
  chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  ngOnChanges(): void {
    this.chartOptions = {
      series: this.pieChartData.values,
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: this.pieChartData.labels,
    };
  }
}

export interface PieChartData {
  values: number[];
  labels: string[];
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
};
