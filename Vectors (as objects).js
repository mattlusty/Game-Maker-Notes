//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lets use objects/structs to represent vectors!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Simple object/struct (representing a vector)

var myVector1 = {
  x: 3,
  y: 8
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get the value of myVector1's x property
show_message(myVector1.x); // 3

// Set (change) the value of myVector1's x property
myVector1.x = 5;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object/struct vector (with methods) ...

var myVector2 =  {
  x: 10,
  y: 12,
  add: function (vector){
      x = x + vector.x
      y = y + vector.y;
  },
  toString: function () {
    return "{ x is ... " + string(x) + ", y is ... " + string(y) + " }";
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get the value of myVector1's x property
show_message(myVector2.y); // 12

// Set (change) the value of myVector1's x property
myVector2.y = 20;

// Interesting fact, when GMS tries to convert an object to a string (using the string() function)
// - It first checks to see if there is a custom toString() method on the object 
// - Hence why we see our custom toString() output! ...
show_message(string(_myVector2)); // "{ x is ... 10, y is ... 20 }"

// Call the myVector2 object's "add" method
myVector2.add(myVector1) // alters the myVector2's x, y properties!

show_message(string(_myVector2)); // "{ x is ... 15, y is ... 28 }"

// So its the same result as ...
show_message(_myVector2.toString()); // "{ x is ... 15, y is ... 28 }"