import { title } from "process";

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): {} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
        }
      }
    };
  };
}

@Logger("Ok, it's work")
@WithTemplate("<h1>My Persone Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating persone object...");
  }
}

// const pers = new Person();

// console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, description: PropertyDescriptor) {
  console.log("Accesor decorator");
  console.log(target);
  console.log(name);
  console.log(description);
}

function Log3(
  target: any,
  name: string | Symbol,
  description: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(description);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decoratior");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function Autobind(_: any, _2: string, description: PropertyDescriptor) {
  const originalMethod = description.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "this is Works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidatiors: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidatiors[target.constructor.name] = {
    ...registeredValidatiors[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidatiors[target.constructor.name] = {
    ...registeredValidatiors[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidatiors[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  for (const prop in objValidatorConfig) {
    for (const validator in objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          return !!obj[prop];
        case "positive":
          return obj[prop] > 0;
      }
    }
  }
}

class Course {
  title: string;
  price: number;

  constructor(t: string, n: number) {
    this.title = t;
    this.price = n;
  }
}

const courseForm = document.getElementById("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createCourse = new Course(title, price);
  console.log(createCourse);
});
