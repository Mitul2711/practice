import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  host: {
    '(click)': 'onClick()'
  }
})
export class CustomDirective {

  @Input() number: any;

  private ef : ElementRef;

  constructor(ef: ElementRef) { 
    this.ef = ef;
   }

  onClick() {
    if (this.number % 5 === 0) {
      
      if(this.ef) {
        this.ef.nativeElement.style.color = 'green';
      }
 
    } else {

        if(this.ef) {
          this.ef.nativeElement.style.color = 'red';
        }

    }
  }

}
