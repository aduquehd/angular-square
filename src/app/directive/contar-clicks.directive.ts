import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appContarClicks]'
})

export class ContarClicksDirective {
  clickCount = 1;

  @HostBinding('style.opacity') opacity = 1;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('a', btn, 'Número de clicks: ', this.clickCount++);
    this.opacity += .1;
  }

  constructor() {
  }

}
