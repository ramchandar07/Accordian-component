import {Component, Input} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
	selector:'accordian-group',
	template:`
              <div (click)="showDetails()">
                   {{heading}}
              </div>
               <div [ngClass]="{listDetails:!isShow}">
                 <ng-content></ng-content>
               </div>
	         `
})

export class AccordianGroup{
	private isShow:boolean;
	@Input() heading: string;
    constructor(private appComponent:AppComponent){
     this.isShow = false;
     this.appComponent.createAccordianGroupArr(this);
    }
  
   showDetails(){
     this.appComponent.closeOthers(this);
     this.isShow = !this.isShow
   }
}