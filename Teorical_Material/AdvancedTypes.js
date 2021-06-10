var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startData: new Date()
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
var result = add("Max", "Svarz");
result.split(" ");
var fetchedUserData = {
    id: "wd",
    name: "Max",
    job: { title: "CEO", description: "My own company" }
};
console.log(fetchedUserData.job.title);
var userInput = "";
var storedData = userInput !== null && userInput !== void 0 ? userInput : "Default";
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
}
printEmployeeInformation(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo..." + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
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
var userInputElement = (document.getElementById("user-input"));
if (userInputElement) {
    userInputElement.value = "Hi there";
}
var errorBag = {
    email: "not valid email",
    userName: "must start with a capital character!"
};
