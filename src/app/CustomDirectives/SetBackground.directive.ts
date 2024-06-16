import { Directive, ElementRef,Input,OnInit ,Renderer2} from "@angular/core";

@Directive({
    selector : '[setBackground]'
})
export class SetBackground implements OnInit{

    // @Input('setBackground') backColor : string = '#36454F';
    // @Input() textColor : string = 'white';

    @Input('setBackground') changeTextAndBackgroundColor : {backColor: string, textColor : string};
    // private element : ElementRef;
    constructor(private element : ElementRef, private render : Renderer2){
        // this.element = element;
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white';

        this.render.setStyle(this.element.nativeElement,'backgroundColor',this.changeTextAndBackgroundColor.backColor);
        this.render.setStyle(this.element.nativeElement,'color',this.changeTextAndBackgroundColor.textColor);
        // this.render.setAttribute(this.element.nativeElement,'title','Sample Text');
    }
}