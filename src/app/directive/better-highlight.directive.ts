import { OnInit,ElementRef,Directive ,Renderer2} from "@angular/core";


@Directive({
    selector:"[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit{

    constructor(private renderer: Renderer2,private elementRef : ElementRef){}

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement , "backgroundColor","yellow");
    }

}