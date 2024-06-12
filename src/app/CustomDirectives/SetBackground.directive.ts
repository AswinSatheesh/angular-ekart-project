import { Directive, ElementRef,OnInit ,Renderer2} from "@angular/core";

@Directive({
    selector : '[setBackground]'
})
export class SetBackground implements OnInit{
    // private element : ElementRef;
    constructor(private element : ElementRef, private render : Renderer2){
        // this.element = element;
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white';

        this.render.setStyle(this.element.nativeElement,'backgroundColor','#36454F');
        this.render.setStyle(this.element.nativeElement,'color','white');
        this.render.setAttribute(this.element.nativeElement,'title','Sample Text');
    }
}