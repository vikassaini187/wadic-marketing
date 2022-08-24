"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ScheduleMettingComponent = void 0;
var core_1 = require("@angular/core");
var ScheduleMettingComponent = /** @class */ (function () {
    function ScheduleMettingComponent() {
    }
    ScheduleMettingComponent.prototype.ngOnInit = function () {
    };
    ScheduleMettingComponent = __decorate([
        core_1.Component({
            selector: 'app-schedule-metting',
            templateUrl: './schedule-metting.component.html',
            styleUrls: ['./schedule-metting.component.css']
        })
    ], ScheduleMettingComponent);
    return ScheduleMettingComponent;
}());
exports.ScheduleMettingComponent = ScheduleMettingComponent;
