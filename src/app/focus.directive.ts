import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  @HostListener('focus') onFocus() {
    console.log('Oya now')
  }
  constructor() { }

}