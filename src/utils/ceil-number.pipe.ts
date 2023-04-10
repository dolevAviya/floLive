import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ceilNumber',
  standalone: true
})
export class CeilNumberPipe implements PipeTransform {

  transform(number: number): number {
    return Math.ceil(number);
  }

}
