import {Component } from '@angular/core';

@Component ({
	selector:'my-app',
	template: `
	            <h1>Accordian Component</h1>
	            <accordian-group *ngFor = 'let group of groupArray' [heading]="group.heading" >
                    <span>{{group.content}}</span>
	            </accordian-group>
		            `
})


export class AppComponent{
  private groupArray: Array<any>;
  accordianGroupAray: Array<any> = [];

  constructor(){
    this.groupArray = [{
       heading:'List 1',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
       heading:'List 2',
       content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry '
    },
    {
         heading:'List 3',
         content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry'
    }];
  }
  
  closeOthers(subComp): void{
     this.accordianGroupAray.forEach(function(group){
        if(group !== subComp){
           group.isShow = false;
        }
     })
  }

  createAccordianGroupArr(arr): void{
     this.accordianGroupAray.push(arr);
  }


	
}