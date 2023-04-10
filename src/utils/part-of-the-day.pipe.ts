import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partOfTheDay',
  standalone: true,
})
export class PartOfTheDayPipe implements PipeTransform {
  transform(date: Date): string {
    const hour = date.getHours();

    if (hour >= 6 && hour < 12) return 'Good Morning';
    else if (hour >= 12 && hour < 16) return 'Good Afternoon';
    else if (hour >= 16 && hour < 22) return 'Good Evening';
    else return 'Good Night';
  }
}
