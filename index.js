"use strict";
const person = {
  name: "nikos",
  age: 30,
  sayName: function () {
    console.log(this.name);

    var saySurname = () => {
      console.log(this, "THIS");
    };

    saySurname();
  },
};

person.sayName();

function globalFunc() {
  console.log(this);
}

globalFunc();

function createPerson(name, surname) {
  var person = {};
  person.name = name;
  person.surname = surname;
  person.sayName = function () {
    console.log(this.name);
  };
  return person;
}

var createdPerson = createPerson("nikos", "oti na nai");
console.log(createdPerson);
createdPerson.sayName();

var personFunctions = {
  sayName: function () {
    console.log(this.name);
  },
  sayAge: function () {
    console.log(this.age);
  },
};

function createPersonFirstOOP(name, age) {
  var person = Object.create(personFunctions);
  person.name = name;
  person.age = age;

  return person;
}
var createdPerson2 = createPersonFirstOOP("nikos", 30);
console.log(createdPerson2);
createdPerson2.sayName();
createdPerson2.sayAge();

function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log("an object was created");
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

//creates an empty object
//makes this point to the created object
//calls the function
//returns the object

var myperson = new Person("nikos", 30);
console.log(myperson);
console.log("%O", Person);
myperson.sayName();

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  sayBrand() {
    console.log(this.brand);
  }
  saySpeed() {
    console.log(this.speed);
  }
  calculateTopSpeed() {
    return 150;
  }
}

class Truck extends Car {
  constructor(brand, speed, cargo) {
    super(brand, speed);
    this.cargo = cargo;
  }
  sayCargo() {
    console.log(this.cargo);
  }
  saySpeed() {
    console.log("my trucks speed is " + this.speed);
  }
  calculateTopSpeed() {
    return super.calculateTopSpeed() + 10;
  }
}

var myCar = new Car("nissan", 150);

myCar.sayBrand();
myCar.saySpeed();

var myTruck = new Truck("scania", 150, "fruit");

myTruck.sayBrand();
myTruck.saySpeed();
myTruck.sayCargo();
console.log(myTruck.calculateTopSpeed());

class Shape {
  drawShape() {}
}

//constructor Function
//create Car function with accelerate, stop and sayBrand functions
//
//class
//class Shape drawShape
//class Circle, Square
