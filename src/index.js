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
//# sourceMappingURL=index.js.map