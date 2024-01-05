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

let speakOther = duck.speak;
let dog = "woof";
let doStuff = function () {
  console.log("stuff");
}
let doThat = () => {
  console.log("that");
}

duck.name();
name(thing);
speek(thing);
speak(thing);
speak2(thing);
speakOther(thing);
dog(thing);
doStuff(thing);


  
