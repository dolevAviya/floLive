import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMinutesClass]',
  standalone: true
})
export class MinutesClassDirective {

  minutes = new Date().getMinutes()

  @HostBinding('class')
  className = this.minutes < 6 ? 'navy-rectangle' : 'orange-circle';

}
