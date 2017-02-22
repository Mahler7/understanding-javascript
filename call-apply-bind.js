var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function(){
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname
  }
}

var logName = function(lang1, lang2){
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('---------------------------');
}

//passes this variable from person into variable, var can later be called as a function
var logPersonName = logName.bind(person)

logPersonName();
logPersonName('en');

//call controls this and also can pass parameters
logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

//also works
var logName2 = function(lang1, lang2){
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('---------------------------');
}.bind(person);

logName2();

(function(lang1, lang2){
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('---------------------------');
}).apply(person, ['en', 'es']);

//function borrowing (apply and call)
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe',
}

console.log(person.getFullName.apply(person2));

//function currying (bind) 2 is a, 4 is b. bind passes the 2 value permenantly
function multiply(a, b){
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));
