let list = ["apple", "banana", "cake"];
list.push("duck");
list.slice(1);
list.pop();
list.toString();

let duck = {
  name: "Donald", 
  speak: function(word) {
    console.log("quack quack");
  }
};

function foo () {
  let goo = "hello";
}

let thing = "hello";
foo(list);
duck.speak(thing);


  
