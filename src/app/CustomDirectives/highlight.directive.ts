import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element : ElementRef, private renderer : Renderer2) { }

  onMouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'highlight-product');
  }

  onMouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'highlight-product');
  }

}
