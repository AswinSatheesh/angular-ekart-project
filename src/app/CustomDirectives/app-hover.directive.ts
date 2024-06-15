import { Directive, ElementRef, Host, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element : ElementRef , private renderer : Renderer2) { }

  @HostBinding('style.backgroundColor') backgroudColor : string = '#28282B';
  @HostBinding('style.border') border : string ='none';
  @HostBinding('style.color') textColor : string ='white';

  @HostListener('mouseenter') onMouseEnter(){
    // console.log("Mouse entered");
    this.backgroudColor = 'white';
    this.textColor = '#28282B';
    this.border = '#28282B 3px solid';
    
  }

  @HostListener('mouseout') onMouseOut(){
    this.backgroudColor = '#28282B';
    this.textColor = 'white';
    this.border = 'none';
  }

}
