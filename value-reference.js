//by value primitives
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

//by reference objects and functions
var c = { greeting: 'hi' }
var d

d = c;
c.greeting = 'hello'; //mutate

console.log(c);
console.log(d);

//by reference functions
function changeGreet(obj){
  obj.greeting = 'Hola'; //mutate
}

changeGreet(d);
console.log(c);
console.log(d);

// = operator sets up new memory space (new address)
c = { greeting: 'howdy' }
console.log(c);
console.log(d);