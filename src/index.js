"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, wheels) {
        this.status = 'stopped';
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    Vehicle.prototype.start = function () {
        this.status = 'started';
    };
    Vehicle.prototype.stop = function () {
        this.status = 'stopped';
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model) {
        return _super.call(this, make, model, 'four') || this;
    }
    return Car;
}(Vehicle));
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle(make, model) {
        return _super.call(this, make, model, 2) || this;
    }
    return MotorCycle;
}(Vehicle));
function printStatus(vehicle) {
    if (vehicle.status === 'running') {
        console.log('The vehicle is running.');
    }
    else {
        console.log('The vehicle is stopped.');
    }
}
var myHarley = new MotorCycle('Harley-Davidson', 'Low Rider S');
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
var myBuick = new Car('Buick', 'Regal');
myBuick.wheels = Number(myBuick.wheels) - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
var NCycle = /** @class */ (function () {
    function NCycle(make, model, wheels) {
        this.status = 'stopped';
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    NCycle.prototype.start = function () {
        this.status = 'started';
    };
    NCycle.prototype.stop = function () {
        this.status = 'stopped';
    };
    NCycle.prototype.print = function (index) {
        if (index === void 0) { index = 0; }
        if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log("This is a " + this.make + " " + this.model + " NCycle.");
        }
        else if (Array.isArray(this.make) &&
            Array.isArray(this.model) &&
            this.make.length > index &&
            this.model.length > index) {
            console.log("This NCycle has a " + this.make[index] + " " + this.model[index] + " at " + index + ".");
        }
        else {
            console.log('This NCycle was not created properly.');
        }
    };
    NCycle.prototype.printAll = function () {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            for (var i = 0; i < this.make.length; i++) {
                console.log("This is a " + this.make[i] + " " + this.model[i] + " NCycle.");
            }
        }
        else {
            console.log('This NCycle was not created properly.');
        }
    };
    return NCycle;
}());
//# sourceMappingURL=index.js.map