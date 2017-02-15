// function statement doesnt return value
function greet(){
  console.log("Hi");
}

greet();

// anonymous function expression does return value
var anonymousGreet = function(){
  console.log("hi");
}

anonymousGreet()

function log(a){
  a();
}

// log(3);

log(function(){
  console.log("Hello");
})

