//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1) Simple Constructor (no methods)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function VectorA (_x, _y) constructor {
    
  // Properties
    
  x = _x;
  y = _y;

}

// Create a new "VectorB" object/struct instance - using the constructor function ...

var myVectorA1 = new VectorA(8, 6);

show_message(string(myVectorA1)); // {x: 8, y: 6}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2) Constructor for object WITH methods

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

// Create a new "VectorB" object/struct instance - using the constructor function ...

var myVectorB1 = new VectorB (20, 30);

// Interact with this object/struct instance ...

// Notice that built-in string() function makes use of the object's custom toString() method!
show_message(string(myVectorB1)); // {x: 20, y: 30}

// Access the instances "y" property value
show_message(string(myVectorB1.y)); // 30

// Call the myVectorB1's "add" method 
myVectorB1.add(myVectorA1);

// See that how the "add" method has changed the myVectorB1's x, y properties
show_message(string(myVectorB1)); // {x: 28, y: 36}
