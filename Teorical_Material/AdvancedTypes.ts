type Admin = {
  name: string;
  privileges: Array<string>;
};

type Employee = {
  name: string;
  startData: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startData: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

const result = add("Max", "Svarz");
result.split(" ");

const fetchedUserData = {
  id: "wd",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData.job.title);

const userInput = "";

const storedData = userInput ?? "Default";

console.log(storedData);

type UnknowEmpolyee = Employee | Admin;

function printEmployeeInformation(emp: UnknowEmpolyee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("moving speed:" + speed);
}

const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")
);

if (userInputElement) {
  userInputElement.value = "Hi there";
}

interface ErrorConteiner {
  [prop: string]: string;
}

const errorBag: ErrorConteiner = {
  email: "not valid email",
  userName: "must start with a capital character!",
};
