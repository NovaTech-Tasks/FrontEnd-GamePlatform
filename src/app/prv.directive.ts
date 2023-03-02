import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appPrv]'
})
export class PrvDirective {

  constructor(private ele:ElementRef) {

  }
  @HostListener('click')
  PrvFunc(){
    const elem = this.ele.nativeElement.parentElement.parentElement.children[0];
    const item = elem.getElementsByClassName("pic")
    elem.prepend(item[item.length - 1]);
  }
}
