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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                var hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                }
                return _this;
            }
            return class_1;
        }(originalConstructor));
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Max";
        console.log("Creating persone object...");
    }
    Person = __decorate([
        Logger("Ok, it's work"),
        WithTemplate("<h1>My Persone Object</h1>", "app")
    ], Person);
    return Person;
}());
// const pers = new Person();
// console.log(pers);
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, description) {
    console.log("Accesor decorator");
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log3(target, name, description) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log4(target, name, position) {
    console.log("Parameter decoratior");
    console.log(target);
    console.log(name);
    console.log(position);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error("Invalid price - should be positive");
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title");
    __decorate([
        Log2
    ], Product.prototype, "price");
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
function Autobind(_, _2, description) {
    var originalMethod = description.value;
    var adjDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.message = "this is Works!";
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        Autobind
    ], Printer.prototype, "showMessage");
    return Printer;
}());
var p = new Printer();
var button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", p.showMessage);
var registeredValidatiors = {};
function Required(target, propName) {
    var _a;
    registeredValidatiors[target.constructor.name] = __assign(__assign({}, registeredValidatiors[target.constructor.name]), (_a = {}, _a[propName] = ["required"], _a));
}
function PositiveNumber(target, propName) {
    var _a;
    registeredValidatiors[target.constructor.name] = __assign(__assign({}, registeredValidatiors[target.constructor.name]), (_a = {}, _a[propName] = ["positive"], _a));
}
function validate(obj) {
    var objValidatorConfig = registeredValidatiors[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    for (var prop in objValidatorConfig) {
        for (var validator in objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    return !!obj[prop];
                case "positive":
                    return obj[prop] > 0;
            }
        }
    }
}
var Course = /** @class */ (function () {
    function Course(t, n) {
        this.title = t;
        this.price = n;
    }
    return Course;
}());
var courseForm = document.getElementById("form");
courseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var titleEl = document.getElementById("title");
    var priceEl = document.getElementById("price");
    var title = titleEl.value;
    var price = +priceEl.value;
    var createCourse = new Course(title, price);
    console.log(createCourse);
});
