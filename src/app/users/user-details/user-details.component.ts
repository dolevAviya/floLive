import { Component, OnInit } from '@angular/core';
import { BarChartData } from 'src/charts/bar-chart/bar-chart.component';
import { User } from '../users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  chartData: BarChartData = {
    values: [],
    colors: [],
    labels: [],
    annotations: [],
  };
  selectedUser!: User;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let ageSum = 0;
    const users = history.state.users;
    if (users) {
      console.log(users);

      users.forEach((user: User) => {
        if (user.id !== history.state.userId) {
          ageSum += user.age;
          this.chartData.values.push(user.age);
          this.chartData.colors.push(
            user.gender === 'male' ? '#00AEFF' : '#FF5500'
          );
          this.chartData.labels?.push(`${user.firstName} ${user.lastName}`);
        } else {
          this.selectedUser = user;
          this.chartData.annotations?.push({
            value: user.age,
            label: `chosen user age: ${user.age}`,
            color: '#FF00EC',
          });
        }
      });

      if (users.length > 2) {
        const average = ageSum / (history.state.users.length - 1);
        this.chartData.annotations?.push({
          value: average,
          label: `average age of selected group: ${Math.round(average)}`,
          color: '#FFFB00',
        });
      }
    } else {
      this.navigateToUsers();
    }
  }

  navigateToUsers() {
    this.router.navigate(['users/main']);
  }
}
