//function statement
function greet(name){
  console.log('Hello ' + name);
}
greet('John');

//function expression
var greetFunc = function(name){
  console.log('Hello ' + name);
}
greetFunc('John');

//immediately invoked function expression (IIFE)
var greeting = function(name){
  return 'Hello ' + name;
}('John');
console.log(greeting);

//allows function statement to be called without name, immediately invoked, classic example
var firstname = 'John';

(function(name){
  var greeting = 'Inside IIFE: Hello';
  console.log(greeting + ' ' + name);
}(firstname));

//affect global object with immediate function
(function(global, name){
  var greeting = 'Inside IIFE: Hello';
  global.greeting = 'Hello';
  console.log(greeting + ' ' + name);
}(window, firstname));