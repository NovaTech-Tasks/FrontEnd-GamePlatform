import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private ele: ElementRef) {

  }
  @HostListener('click')
  nextFunc(){
    const elem = this.ele.nativeElement.parentElement.parentElement.children[0];
    const item = elem.getElementsByClassName("pic")
    elem.append(item[0]);
  }

}

