import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class highlight {
  @Input('highlight')highlightcolor;
  constructor( public elereference: ElementRef) {}
  @HostListener('mouseenter') mouseenter() {
    this.elereference.nativeElement.style.color=this.highlightcolor;
  }
  @HostListener('mouseleave') mouseleave() {
    this.elereference.nativeElement.style.color='black';
  }
}
