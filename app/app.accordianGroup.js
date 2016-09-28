"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var AccordianGroup = (function () {
    function AccordianGroup(appComponent) {
        this.appComponent = appComponent;
        this.isShow = false;
        this.appComponent.createAccordianGroupArr(this);
    }
    AccordianGroup.prototype.showDetails = function () {
        this.appComponent.closeOthers(this);
        this.isShow = !this.isShow;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccordianGroup.prototype, "heading", void 0);
    AccordianGroup = __decorate([
        core_1.Component({
            selector: 'accordian-group',
            template: "\n              <div (click)=\"showDetails()\">\n                   {{heading}}\n              </div>\n               <div [ngClass]=\"{listDetails:!isShow}\">\n                 <ng-content></ng-content>\n               </div>\n\t         "
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent])
    ], AccordianGroup);
    return AccordianGroup;
}());
exports.AccordianGroup = AccordianGroup;
//# sourceMappingURL=app.accordianGroup.js.map