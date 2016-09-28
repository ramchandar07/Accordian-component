import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {AccordianGroup} from './app.accordianGroup';

import {AccordianEvent} from './accordianEvent.directive'

@NgModule({
	imports: [BrowserModule],
    declarations: [ AppComponent,
                    AccordianGroup,
                    AccordianEvent ],
	bootstrap: [AppComponent]
})

export class AppModule{
	
}