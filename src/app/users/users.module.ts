import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MainComponent } from './main/main.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PieChartComponent } from 'src/charts/pie-chart/pie-chart.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BarChartComponent } from 'src/charts/bar-chart/bar-chart.component';
import { CeilNumberPipe } from 'src/utils/ceil-number.pipe';

@NgModule({
  declarations: [MainComponent, UsersTableComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatPaginatorModule,
    PieChartComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule,
    BarChartComponent,
    CeilNumberPipe
  ],
})
export class UsersModule {}
