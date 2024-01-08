//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Objects/structs in action!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Simple object/struct (with no "methods")

var myObject1 = {
  name: "Alphie",
  age: 10,
  colour: "red"
}

// Object/struct (with "properties" and "methods")

var myObject2 = {
  name: "Bettie",
  age: 65,
  sayName: function () {
    show_message("My name is ... " + name);
  },
  sayAge: function () {
    show_message("My age is ... " + age);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Interacting with object/structs using the "dot accessor" ...
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get an object property
show_message(myObject1.name); // "Alphie"

// Set (change) an object property
myObject1.name = "Tommy";

// Call an object's method
myObject2.sayHi(); // "Hi my name is ... Bettie"
