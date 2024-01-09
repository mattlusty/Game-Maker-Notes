//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A) Simple Constructor (no methods)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function VectorA (_x, _y) constructor {
    
  // Properties
    
  x = _x;
  y = _y;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a new "VectorA" object/struct instance - using the constructor function ...

var myVectorA1 = new VectorA(3, 8);

// Get the value of myVectorA1's x property
show_message(myVectorA1.x); // 3

// Set (change) the value of myVectorA1's x property
myVectorA1.x = 5;

show_message(string(myVectorA1)); // {x:5, y: 8}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// B) Constructor (WITH methods)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function VectorB (_x, _y) constructor {
    
  // Properties
    
  x = _x;
  y = _y;

  // Methods

  add = function (vector){
    x = x + vector.x
    y = y + vector.y;
  }

  toString = function () {
    return "{ x is ... " + string(x) + ", y is ... " + string(y) + " }";
  }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a new "VectorB" object/struct instance - using the constructor function ...

var myVectorB1 = new VectorB (10, 20);

// Interact with this object/struct instance ...

// Notice that built-in string() function makes use of the object's custom toString() method!
show_message(string(myVectorB1)); // {x: 20, y: 30}

// Access the instances "y" property value
show_message(string(myVectorB1.y)); // 30

// Call the myVectorB1's "add" method 
myVectorB1.add(myVectorA1);

// See that how the "add" method has changed the myVectorB1's x, y properties
show_message(string(myVectorB1)); // {x: 15, y: 28}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Quickly create more VectorB instances!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var player1Pos = new VectorB(100, 150);
var player2Pos = new VectorB(200, 150);

var player1Vel = new VectorB(0, 0);
var player2Vel = new VectorB(10, 5);

var player1Acc = new VectorB(3, 6);
var player2Acc = new VectorB(0, 0);

var windVel = new VectorB(30, 10);

// Each step ...

// Change velocity (using acceleration)
player1Vel.add(player1Acc);
player2Vel.add(player2Acc);

// Change position (using velocity)
player1Pos.add(player1Vel);
player2Pos.add(player2Vel);