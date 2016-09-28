import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
	selector : '[accordianEvent]'
})

export class AccordianEvent {
	constructor(private el: ElementRef, private renderer: Renderer){
       
	}
	@HostListener('click') onClick(){
	   this.renderer.setElementStyle(this.el.nativeElement.children[0],'display','block')
	}
}