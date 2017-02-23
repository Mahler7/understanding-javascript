function Person(){
  this.firstname = 'John';
  this.lastname = 'Doe';
  console.log("This function is invoked.");
}

Person.prototype.getFullName = function(){
  return this.firstname + ' ' + this.lastname;
}

Person.prototype.getFormalFullName = function(){
  return this.lastname + ' ' + this.firstname;
}

var john = new Person(); //creates new object fields in Person Function

console.log(john);

console.log(john.getFormalFullName());

function Person2(firstname, lastname){
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
}

var jane = new Person2('Jane', 'Doe');

String.prototype.isLengthGreaterThan = function(limit){
  return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));
