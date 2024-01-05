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
let number = 3643;

foo(list);
duck.speak(thing);

let speak2 = duck.speak.word;
speak2(thing);


  
